import { Component } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  template: `
    <div class="coming-soon">
      <div class="grid-bg"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="glow glow-3"></div>
      <div class="scanline"></div>
      <div class="content">
        <div class="logo-wrapper">
          <img src="assets/images/logos/RIPSWARE_LOGO_WHITE-01.png" alt="RIPSWARE" class="logo" />
          <div class="logo-glow"></div>
        </div>
        <p class="tagline">
          <span class="bracket">[</span>
          Digital &amp; IT Services
          <span class="bracket">]</span>
        </p>
        <div class="status-bar">
          <div class="status-dot"></div>
          <span class="status-text">SYSTEM INITIALIZING</span>
        </div>
        <h2 class="glitch" data-text="Coming Soon">Coming Soon</h2>
        <p class="message">We're engineering the future. Stay connected.</p>
        <div class="terminal">
          <span class="prompt">&gt; </span>
          <span class="typed-text">launching ripsware.com</span>
          <span class="cursor">_</span>
        </div>
        <div class="contact">
          <a href="mailto:info&#64;ripsware.com">info&#64;ripsware.com</a>
        </div>
      </div>
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    .coming-soon {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      background: #000;
      color: #fff;
      font-family: 'Manrope', sans-serif;
      text-align: center;
      overflow: hidden;
    }

    /* Animated grid background */
    .grid-bg {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(0, 255, 170, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 170, 0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      animation: gridMove 20s linear infinite;
    }

    @keyframes gridMove {
      0% { transform: translate(0, 0); }
      100% { transform: translate(60px, 60px); }
    }

    /* Floating glow orbs */
    .glow {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.15;
      animation: float 8s ease-in-out infinite;
    }

    .glow-1 {
      width: 500px;
      height: 500px;
      background: #00ffaa;
      top: -20%;
      left: -10%;
      animation-delay: 0s;
    }

    .glow-2 {
      width: 400px;
      height: 400px;
      background: #7c4dff;
      bottom: -15%;
      right: -10%;
      animation-delay: -3s;
    }

    .glow-3 {
      width: 300px;
      height: 300px;
      background: #00b8ff;
      top: 50%;
      left: 60%;
      animation-delay: -5s;
      opacity: 0.08;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -30px) scale(1.05); }
      66% { transform: translate(-20px, 20px) scale(0.95); }
    }

    /* Scanline effect */
    .scanline {
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.03) 2px,
        rgba(0, 0, 0, 0.03) 4px
      );
      pointer-events: none;
      z-index: 2;
    }

    /* Corner brackets */
    .corner {
      position: absolute;
      width: 40px;
      height: 40px;
      border-color: rgba(0, 255, 170, 0.3);
      border-style: solid;
      border-width: 0;
      z-index: 3;
    }

    .corner-tl { top: 30px; left: 30px; border-top-width: 2px; border-left-width: 2px; }
    .corner-tr { top: 30px; right: 30px; border-top-width: 2px; border-right-width: 2px; }
    .corner-bl { bottom: 30px; left: 30px; border-bottom-width: 2px; border-left-width: 2px; }
    .corner-br { bottom: 30px; right: 30px; border-bottom-width: 2px; border-right-width: 2px; }

    /* Content */
    .content {
      position: relative;
      z-index: 3;
      max-width: 700px;
      padding: 2rem;
      animation: fadeUp 1s ease-out;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Logo */
    .logo-wrapper {
      position: relative;
      display: inline-block;
      margin-bottom: 1.5rem;
    }

    .logo {
      max-width: 300px;
      height: auto;
      position: relative;
      z-index: 1;
    }

    .logo-glow {
      position: absolute;
      inset: -20px;
      background: radial-gradient(ellipse, rgba(0, 255, 170, 0.1) 0%, transparent 70%);
      z-index: 0;
      animation: pulse 3s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.1); }
    }

    /* Tagline */
    .tagline {
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.5);
      margin: 0 0 2rem;
    }

    .bracket {
      color: #00ffaa;
      font-weight: 700;
    }

    /* Status bar */
    .status-bar {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(0, 255, 170, 0.05);
      border: 1px solid rgba(0, 255, 170, 0.15);
      border-radius: 20px;
      padding: 6px 16px;
      margin-bottom: 2rem;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      background: #00ffaa;
      border-radius: 50%;
      animation: blink 1.5s ease-in-out infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.2; }
    }

    .status-text {
      font-size: 0.7rem;
      letter-spacing: 0.2rem;
      color: #00ffaa;
      font-weight: 600;
    }

    /* Glitch heading */
    h2 {
      font-size: 3rem;
      font-weight: 800;
      letter-spacing: 0.1rem;
      margin: 0 0 1rem;
      position: relative;
      animation: glitchAnim 5s infinite;
    }

    h2::before,
    h2::after {
      content: attr(data-text);
      position: absolute;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    h2::before {
      color: #00ffaa;
      z-index: -1;
      animation: glitch1 3s infinite;
    }

    h2::after {
      color: #7c4dff;
      z-index: -2;
      animation: glitch2 3s infinite;
    }

    @keyframes glitch1 {
      0%, 94%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
      95% { clip-path: inset(20% 0 60% 0); transform: translate(-3px, 1px); }
      97% { clip-path: inset(50% 0 20% 0); transform: translate(3px, -1px); }
    }

    @keyframes glitch2 {
      0%, 94%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
      96% { clip-path: inset(70% 0 10% 0); transform: translate(3px, 2px); }
      98% { clip-path: inset(10% 0 70% 0); transform: translate(-3px, -2px); }
    }

    @keyframes glitchAnim {
      0%, 100% { text-shadow: none; }
      92% { text-shadow: none; }
      93% { text-shadow: 2px 0 #00ffaa, -2px 0 #7c4dff; }
      94% { text-shadow: none; }
      96% { text-shadow: -1px 0 #00ffaa, 1px 0 #7c4dff; }
      97% { text-shadow: none; }
    }

    .message {
      font-size: 1.05rem;
      opacity: 0.5;
      margin: 0 0 2.5rem;
      font-weight: 300;
    }

    /* Terminal line */
    .terminal {
      display: inline-block;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 6px;
      padding: 10px 20px;
      margin-bottom: 2.5rem;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
    }

    .prompt {
      color: #00ffaa;
    }

    .typed-text {
      color: rgba(255, 255, 255, 0.7);
      animation: typing 2s steps(22) 0.5s both;
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;
      max-width: 0;
      vertical-align: bottom;
    }

    @keyframes typing {
      to { max-width: 200px; }
    }

    .cursor {
      color: #00ffaa;
      animation: cursorBlink 0.8s step-end infinite;
    }

    @keyframes cursorBlink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    /* Contact */
    .contact {
      margin-top: 0;
    }

    .contact a {
      color: rgba(255, 255, 255, 0.4);
      text-decoration: none;
      font-size: 0.85rem;
      letter-spacing: 0.1rem;
      transition: color 0.3s;
    }

    .contact a:hover {
      color: #00ffaa;
    }

    @media (max-width: 600px) {
      .logo { max-width: 200px; }
      h2 { font-size: 2rem; }
      .tagline { font-size: 0.8rem; letter-spacing: 0.15rem; }
      .corner { width: 25px; height: 25px; }
      .corner-tl, .corner-tr { top: 15px; }
      .corner-bl, .corner-br { bottom: 15px; }
      .corner-tl, .corner-bl { left: 15px; }
      .corner-tr, .corner-br { right: 15px; }
    }
  `]
})
export class ComingSoonComponent {}
