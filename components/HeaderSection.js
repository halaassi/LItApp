import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class HeaderSection extends LitElement {
  static properties = {
    menuOpen: { type: Boolean }
  };

  constructor() {
    super();
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

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

    /* Hamburger menu styles for small screens */
    .hamburger {
      display: none;
      cursor: pointer;
      flex-direction: column;
      gap: 5px;
    }

    .hamburger div {
      width: 25px;
      height: 3px;
      background: white;
    }

    /* Side menu for small screens */
    .side-menu {
      position: absolute;
      top: 70px;
      right: 10px;
      background-color: #9b59b6;
      border-radius: 5px;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 1000;
      animation: fadeIn 0.3s ease-in-out;
    }

    .side-menu a {
      color: black;
      text-decoration: none;
      font-weight: bold;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Show hamburger on small screens */
    @media (max-width: 768px) {
      .hamburger {
        display: flex;
      }

      nav,
      .auth-buttons {
        display: none;
      }
    }

    /* Show navigation and auth buttons on larger screens */
    @media (min-width: 769px) {
      .hamburger {
        display: none;
      }

      nav,
      .auth-buttons {
        display: flex;
      }

      .side-menu {
        display: none;
      }
    }
  `;

  render() {
    return html`
      <header>
        <div class="container">
          <div class="logo">BrandName</div>

          <!-- Hamburger Menu (visible on small screens) -->
          <div class="hamburger" @click="${this.toggleMenu}">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <!-- Navigation Links (visible on large screens) -->
          <nav>
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </nav>

          <!-- Auth Buttons (visible on large screens) -->
          <div class="auth-buttons">
            <button class="login-btn">Login</button>
            <button class="join-btn">JOIN US</button>
          </div>
        </div>

        <!-- Side menu (visible when hamburger is clicked) -->
        ${this.menuOpen
          ? html`
              <div class="side-menu">
                <a href="#">Home</a>
                <a href="#">Product</a>
                <a href="#">Pricing</a>
                <a href="#">Contact</a>
              </div>
            `
          : null}
      </header>
    `;
  }
}

customElements.define('header-section', HeaderSection);