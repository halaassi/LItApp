import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class NewsletterSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #25345D;
      color: white;
      padding: 80px 20px;
      text-align: center;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .subtitle {
      color: #8e44ad;
      font-weight: bold;
      margin-bottom: 15px;
    }
    
    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 20px;
    }
    
    .description {
      max-width: 700px;
      margin: 0 auto 40px;
      color: #dcdde1;
    }
    
    form {
      display: flex;
      max-width: 500px;
      margin: 0 auto;
      border-radius: 5px;
      overflow: hidden;
    }
    
    input {
      flex: 1;
      padding: 15px;
      border: none;
      outline: none;
    }
    
    button {
      padding: 15px 30px;
      background: #8e44ad;
      color: white;
      border: none;
      cursor: pointer;
    }
    
    @media (max-width: 600px) {
      form {
        flex-direction: column;
      }
      
      input, button {
        width: 100%;
      }
    }
  `;

  render() 
    return html`
      <div class="container">
        <div class="subtitle">Newsletter</div>
        <h2>Our Popular Courses</h2>
        <p class="description">

          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        

        <form @submit="${this.handleSubmit}">
          <input type="email" placeholder="Your Email" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    `;
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.shadowRoot.querySelector('input').value;
    alert(`Thank you for subscribing with: ${email}`);
  }
}

customElements.define('newsletter-section', NewsletterSection);