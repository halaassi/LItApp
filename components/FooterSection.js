import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class FooterSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #f8f8f8;
      color: #333;
      padding: 60px 40px;
      font-family: Arial, sans-serif;
    }

    .container {
      max-width: 1200px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      justify-content: space-between;
    }

    .col {
      flex: 1;
      min-width: 200px;
    }

    .col h4 {
      font-size: 1.2rem;
      margin-bottom: 15px;
      color: #111c44;
    }

    .col ul {
      list-style: none;
      padding: 0;
    }

    .col ul li {
      margin-bottom: 10px;
      font-size: 0.9rem;
    }

    .bottom {
      text-align: center;
      margin-top: 40px;
      color: #888;
      font-size: 0.85rem;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="col">
          <h4>Company Info</h4>
          <ul>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div class="col">
          <h4>Legal</h4>
          <ul>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div class="col">
          <h4>Features</h4>
          <ul>
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div class="col">
          <h4>Get in Touch</h4>
          <ul>
            <li>1234 Street Name</li>
            <li>City, Country</li>
            <li>info@example.com</li>
            <li>+123 456 7890</li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        Made with ♥ by Your Company Name | All rights reserved
      </div>
    `;
  }
}

customElements.define('footer-section', FooterSection);
