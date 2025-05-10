import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class ClientMattersSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #25345D;
      color: white;
      padding: 80px 20px;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .header-content {
      max-width: 700px;
      margin-bottom: 60px;
    }
    
    .subtitle {
      color: #8e44ad;
      font-weight: bold;
      margin-bottom: 15px;
      text-align: left;
    }
    
    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: left;
    }
    
    .description {
      color: #dcdde1;
      text-align: left;
      line-height: 1.6;
    }
    
    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: flex-start; /* تغيير من center إلى flex-start */
    }
    
    .card {
      background: white;
      color: #333;
      border-radius: 8px;
      padding: 30px 20px;
      flex: 1;
      min-width: 220px;
      max-width: 280px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      text-align: center;
      transition: all 0.3s;
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }
    
    .card img {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
    }
    
    .card-title {
      font-weight: bold;
      margin-bottom: 10px;
    }
    
    .card-line {
      width: 40px;
      height: 3px;
      background-color: #e74c3c;
      margin: 10px auto;
    }
    
    .card-text {
      font-size: 0.9rem;
      color: #7f8c8d;
    }
    
    @media (max-width: 768px) {
      .cards {
        justify-content: center;
      }
      
      .header-content {
        text-align: center;
      }
      
      .subtitle, h2, .description {
        text-align: center;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="header-content">
          <div class="subtitle">Practice Advice</div>
          <h2>Every Client Matters</h2>
          <p class="description">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        
        <div class="cards">
          ${this.renderCard('assets/u1.png', 'Training Courses', 'The gradual accumulation of information about')}
          ${this.renderCard('assets/u2.png', '2,769 online courses', 'The gradual accumulation of information about')}
          ${this.renderCard('assets/u3.png', 'Books Library', 'The gradual accumulation of information about')}
          ${this.renderCard('assets/u4.png', 'Professional Instructors', 'The gradual accumulation of information about')}
        </div>
      </div>
    `;
  }

  renderCard(icon, title, text) {
    return html`
      <div class="card">
        <img src="${icon}" alt="icon">
        <div class="card-title">${title}</div>
        <div class="card-line"></div>
        <div class="card-text">${text}</div>
      </div>
    `;
  }
}

customElements.define('client-matters-section', ClientMattersSection);