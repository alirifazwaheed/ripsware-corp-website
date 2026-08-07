# Deploying ripsware.com to a DigitalOcean Droplet

The site is a static Angular SPA. `npm run build` emits `dist/Matdash/browser/`,
nginx serves it, and GitHub Actions pushes each `main` commit to the droplet over
SSH.

Layout on the droplet:

```
/var/www/ripsware/
├── current -> releases/<commit-sha>     # atomically swapped symlink, nginx root
└── releases/
    ├── <commit-sha>/                    # one directory per deploy, 5 kept
    └── ...
```

Each deploy rsyncs into a fresh `releases/<sha>` directory and then renames the
`current` symlink into place, so a visitor never gets an `index.html` pointing at
hashed bundles that haven't finished uploading.

## Provisioning status

Completed 2026-08-07 against `168.144.127.194` (`ripsware-prod-1`, Ubuntu 24.04).
The site is live on the droplet with a Let's Encrypt certificate covering
`ripsware.com` and `www.ripsware.com`, expiring 2026-11-05 and renewing off
`certbot.timer` (renewal dry-run passes).

The droplet also serves `malas.ripsware.com` and `api.ripsware.com` (a Node
backend proxied on `127.0.0.1:4000`) under a separate certificate. Both were
verified healthy after every change. A backup of the pre-change nginx config sits
at `/root/nginx-backup-20260807-174424.tar.gz`.

The sections below are kept as reference for rebuilding this from scratch.

---

## 1. Prepare the droplet

The droplet (`168.144.127.194`) already serves other vhosts, including
`malas.ripsware.com`. `ripsware.com` is added alongside them as a separate nginx
server block with its own web root and its own certificate — nothing about the
existing sites changes.

From your machine, with `deploy/nginx/ripsware.com.conf` and `deploy/server-setup.sh`
in this repo:

```bash
scp deploy/server-setup.sh deploy/nginx/ripsware.com.conf root@168.144.127.194:/tmp/
ssh root@168.144.127.194 "bash /tmp/server-setup.sh"
```

That creates a `deploy` user, sets up `/var/www/ripsware` with a placeholder page,
enables the nginx site, and reloads nginx. It is deliberately additive: it will not
overwrite an existing `ripsware.com` site file, will not remove any other vhost, and
will not enable `ufw` on its own (it only adds rules if the firewall is already
active). If `nginx -t` fails it removes the site it just added and exits, leaving the
running config untouched.

Verify with a `Host` header, since the IP alone hits whichever vhost is the default:

```bash
curl -H "Host: ripsware.com" http://168.144.127.194
```

That should return the "Awaiting first deploy" page. Confirm the existing site is
still fine too: `curl -I https://malas.ripsware.com`.

## 2. Create the CI deploy key

Generate a keypair dedicated to deploys (no passphrase — CI can't type one):

```bash
ssh-keygen -t ed25519 -f ./ripsware_deploy -C "github-actions@ripsware" -N ""
```

Install the **public** half on the droplet:

```bash
ssh root@168.144.127.194 "cat >> /home/deploy/.ssh/authorized_keys" < ripsware_deploy.pub
```

Confirm it works, and capture the host key while you're at it:

```bash
ssh -i ./ripsware_deploy deploy@168.144.127.194 "echo ok"
ssh-keyscan -H 168.144.127.194 > known_hosts.txt
```

## 3. Add the GitHub repository secrets

Repo → Settings → Secrets and variables → Actions → New repository secret:

| Secret | Value |
| --- | --- |
| `DROPLET_HOST` | `168.144.127.194` |
| `DROPLET_USER` | `deploy` |
| `DROPLET_SSH_KEY` | Full contents of the **private** key `ripsware_deploy` |
| `DROPLET_KNOWN_HOSTS` | Contents of `known_hosts.txt` |
| `DROPLET_PORT` | Optional — only if SSH isn't on 22 |

`DROPLET_KNOWN_HOSTS` is optional but recommended: without it the workflow falls
back to `ssh-keyscan` on every run, which trusts whatever host answers.

Then delete the local private key — GitHub holds the only copy it needs:

```bash
rm ripsware_deploy ripsware_deploy.pub known_hosts.txt
```

## 4. Point DNS at the droplet

At your DNS provider, replace the GitHub Pages records for `ripsware.com`:

| Type | Name | Value |
| --- | --- | --- |
| `A` | `@` | `168.144.127.194` |
| `A` | `www` | `168.144.127.194` |

Remove the four GitHub Pages `A` records (`185.199.108–111.153`) and any
`CNAME` on `www` pointing at `*.github.io`. Leave the `malas` record alone — it
already points at this droplet and is unaffected. Wait for propagation before the
next step; certbot validates over HTTP against the live DNS record.

```bash
dig +short ripsware.com
```

## 5. Enable HTTPS

```bash
ssh root@168.144.127.194
certbot --nginx -d ripsware.com -d www.ripsware.com
```

Choose the redirect option when prompted. Certbot rewrites only
`/etc/nginx/sites-available/ripsware.com`, adding the TLS server block and the
port 80 redirect. This issues a new certificate covering just these two names; the
existing `malas.ripsware.com` certificate is separate and is not touched or renamed.

Renewal runs off the systemd timer that's already on the box — confirm both certs
are tracked:

```bash
certbot certificates
systemctl list-timers | grep certbot
```

## 6. Deploy

Push to `main`, or run the **Deploy to DigitalOcean Droplet** workflow manually
from the Actions tab.

## 7. Turn off GitHub Pages

Repo → Settings → Pages → set Source to **None**. The Pages workflow has already
been replaced by the droplet one in this repo, and `src/CNAME` (which was only
there to tell Pages about the custom domain) has been removed.

---

## Day-to-day

**Deploy:** push to `main`.

**Roll back:** old releases stay on the droplet.

```bash
ssh deploy@168.144.127.194
ls -1dt /var/www/ripsware/releases/*/          # newest first
ln -sfn /var/www/ripsware/releases/<sha> /var/www/ripsware/current.tmp
mv -T /var/www/ripsware/current.tmp /var/www/ripsware/current
```

Re-running the workflow for the desired commit does the same thing and is easier
to trace.

**Logs:** `/var/log/nginx/ripsware.{access,error}.log`.

**Deploy locally without CI** (needs the deploy private key). Git Bash on Windows
has no `rsync`, so pipe a tar over ssh instead — the GitHub runner has rsync and
uses it, this is only for hand deploys:

```bash
npm run build
KEY=/path/to/ripsware_ci
tar czf - -C dist/Matdash/browser . | ssh -i "$KEY" deploy@168.144.127.194 \
  "rm -rf /var/www/ripsware/releases/manual && \
   mkdir -p /var/www/ripsware/releases/manual && \
   tar xzf - -C /var/www/ripsware/releases/manual"
ssh -i "$KEY" deploy@168.144.127.194 \
  "ln -sfn /var/www/ripsware/releases/manual /var/www/ripsware/current.tmp && \
   mv -T /var/www/ripsware/current.tmp /var/www/ripsware/current"
```

## Caching note

`index.html` is served `no-store`; hashed `.js`/`.css` are `immutable` for a year.
That combination is what makes a deploy take effect immediately without stale
bundle references. If you add unhashed files outside `src/assets/`, check they
don't fall into the one-year rule in `deploy/nginx/ripsware.com.conf`.
