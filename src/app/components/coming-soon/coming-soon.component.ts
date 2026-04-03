import { Component } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  template: `
    <div class="coming-soon">
      <div class="content">
        <img src="assets/images/logos/RIPSWARE_LOGO_WHITE-01.png" alt="RIPSWARE" class="logo" />
        <p class="tagline">Digital &amp; IT Services</p>
        <div class="divider"></div>
        <h2>Coming Soon</h2>
        <p class="message">We're building something amazing. Stay tuned!</p>
        <div class="contact">
          <p>Get in touch</p>
          <a href="mailto:info&#64;ripsware.com">info&#64;ripsware.com</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 0;
    }

    .coming-soon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
      color: #fff;
      font-family: 'Manrope', sans-serif;
      text-align: center;
    }

    .content {
      max-width: 600px;
      padding: 2rem;
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 800;
      letter-spacing: 0.3rem;
      margin: 0 0 0.5rem;
    }

    .logo {
      max-width: 280px;
      height: auto;
      margin-bottom: 0.5rem;
    }

    .tagline {
      font-size: 1.1rem;
      font-weight: 300;
      letter-spacing: 0.15rem;
      opacity: 0.8;
      margin: 0 0 2rem;
    }

    .divider {
      width: 60px;
      height: 3px;
      background: #7c4dff;
      margin: 0 auto 2rem;
      border-radius: 2px;
    }

    h2 {
      font-size: 2rem;
      font-weight: 600;
      margin: 0 0 1rem;
    }

    .message {
      font-size: 1.1rem;
      opacity: 0.7;
      margin: 0 0 3rem;
    }

    .contact p {
      font-size: 0.85rem;
      opacity: 0.5;
      margin: 0 0 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }

    .contact a {
      color: #7c4dff;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
    }

    .contact a:hover {
      text-decoration: underline;
    }
  `]
})
export class ComingSoonComponent {}
