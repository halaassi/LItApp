import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class HeaderSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #25345D;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 1.8rem;
      font-weight: bold;
      color: #FFFFFF;
    }
    
    nav {
      display: flex;
      gap: 30px;
    }
    
    nav a {
      text-decoration: none;
      color: #FFFFFF;
      font-weight: 500;
    }
    
    .auth-buttons {
      display: flex;
      gap: 20px;
    }
    
    .login-btn {
      padding: 8px 20px;
      background: transparent;
      border: none;
      color: #FFFFFF;

      cursor: pointer;
    }
    
    .join-btn {
      padding: 8px 20px;
      background: #8e44ad;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <header>
        <div class="container">
          <div class="logo">BrandName</div>
          <nav>
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </nav>
          <div class="auth-buttons">
            <button class="login-btn">Login</button>
            <button class="join-btn">JOIN US</button>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('header-section', HeaderSection);