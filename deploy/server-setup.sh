#!/usr/bin/env bash
#
# One-time droplet setup for ripsware.com. Run as root:
#
#   scp deploy/server-setup.sh deploy/nginx/ripsware.com.conf root@168.144.127.194:/tmp/
#   ssh root@168.144.127.194 "bash /tmp/server-setup.sh"
#
# This droplet already serves other vhosts (malas.ripsware.com), so the script is
# deliberately additive: it never removes an existing nginx site, never touches
# another vhost's config, and never enables the firewall on its own. Idempotent -
# safe to re-run.

set -euo pipefail

DEPLOY_USER="deploy"
WEB_ROOT="/var/www/ripsware"
SITE_NAME="ripsware.com"
# Match the naming the droplet's other vhosts already use: <domain>.conf
SITE_FILE="${SITE_NAME}.conf"
NGINX_CONF_SRC="/tmp/${SITE_FILE}"

if [ "$(id -u)" -ne 0 ]; then
    echo "Run this as root." >&2
    exit 1
fi

echo "==> Preflight"
if [ -e "/etc/nginx/sites-available/$SITE_FILE" ]; then
    echo "    /etc/nginx/sites-available/$SITE_FILE already exists."
    echo "    Refusing to overwrite it - remove or rename it first if you want a clean install." >&2
    exit 1
fi
if [ -e "$WEB_ROOT" ] && [ ! -d "$WEB_ROOT" ]; then
    echo "    $WEB_ROOT exists and is not a directory." >&2
    exit 1
fi
# Make sure no other vhost already claims these hostnames.
if grep -rqE "server_name[^;]*\b(www\.)?ripsware\.com\b" /etc/nginx/sites-enabled/ 2>/dev/null; then
    echo "    Warning: another enabled nginx site already mentions ripsware.com:"
    grep -rlE "server_name[^;]*\b(www\.)?ripsware\.com\b" /etc/nginx/sites-enabled/ | sed 's/^/      /'
    echo "    Two blocks matching the same server_name means nginx serves the first one it loads."
    echo "    Review those files before continuing."
fi

echo "==> Installing packages (no-op if already present)"
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y --no-install-recommends nginx rsync certbot python3-certbot-nginx

echo "==> Creating $DEPLOY_USER user"
if ! id -u "$DEPLOY_USER" >/dev/null 2>&1; then
    adduser --disabled-password --gecos "" "$DEPLOY_USER"
fi
install -d -m 700 -o "$DEPLOY_USER" -g "$DEPLOY_USER" "/home/$DEPLOY_USER/.ssh"
touch "/home/$DEPLOY_USER/.ssh/authorized_keys"
chmod 600 "/home/$DEPLOY_USER/.ssh/authorized_keys"
chown "$DEPLOY_USER:$DEPLOY_USER" "/home/$DEPLOY_USER/.ssh/authorized_keys"

echo "==> Creating web root at $WEB_ROOT"
# The deploy user owns the tree so CI can rsync and flip the symlink without sudo.
install -d -o "$DEPLOY_USER" -g www-data -m 755 "$WEB_ROOT" "$WEB_ROOT/releases"

# Placeholder so nginx has something to serve before the first CI deploy.
if [ ! -e "$WEB_ROOT/current" ]; then
    install -d -o "$DEPLOY_USER" -g www-data -m 755 "$WEB_ROOT/releases/bootstrap"
    echo "<!doctype html><title>ripsware.com</title><h1>Awaiting first deploy</h1>" \
        > "$WEB_ROOT/releases/bootstrap/index.html"
    chown "$DEPLOY_USER:www-data" "$WEB_ROOT/releases/bootstrap/index.html"
    ln -sfn "$WEB_ROOT/releases/bootstrap" "$WEB_ROOT/current"
    chown -h "$DEPLOY_USER:www-data" "$WEB_ROOT/current"
fi

echo "==> Installing nginx site"
if [ ! -f "$NGINX_CONF_SRC" ]; then
    echo "    $NGINX_CONF_SRC not found - copy deploy/nginx/${SITE_NAME}.conf to the droplet first." >&2
    exit 1
fi
cp "$NGINX_CONF_SRC" "/etc/nginx/sites-available/$SITE_FILE"
ln -sfn "/etc/nginx/sites-available/$SITE_FILE" "/etc/nginx/sites-enabled/$SITE_FILE"

# Existing vhosts are left alone, including the stock `default` site. It only
# catches hostnames no other block claims, so it does not shadow ripsware.com.
if ! nginx -t; then
    echo "    nginx config test failed - rolling back this site so the running config stays valid." >&2
    rm -f "/etc/nginx/sites-enabled/$SITE_FILE" "/etc/nginx/sites-available/$SITE_FILE"
    exit 1
fi
systemctl reload nginx

echo "==> Firewall"
# Additive only. Enabling ufw on a live droplet can cut off services (or your own
# SSH session) that this script knows nothing about, so that stays a manual call.
if command -v ufw >/dev/null 2>&1 && ufw status | grep -q "Status: active"; then
    SSH_PORT="$(sshd -T 2>/dev/null | awk '/^port /{print $2; exit}')"
    ufw allow "${SSH_PORT:-22}/tcp"
    ufw allow 'Nginx Full'
    echo "    Rules added to the active firewall."
else
    echo "    ufw is not active - leaving it that way. Ports 80/443 must be reachable."
fi

cat <<'DONE'

==> Base setup complete. Existing vhosts were not modified.

Remaining steps (see DEPLOYMENT.md):
  1. Add the CI deploy public key to /home/deploy/.ssh/authorized_keys
  2. Point ripsware.com + www DNS A records at this droplet, wait for propagation
  3. certbot --nginx -d ripsware.com -d www.ripsware.com
  4. Push to main to trigger the first real deploy

DONE
