
import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class HeroSection extends LitElement {
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
      display: flex;
      align-items: center;
      gap: 60px;
      flex-wrap: wrap;
    }
    
    
    .text-content {
      flex: 1;
      min-width: 300px;
    }
    
    .welcome {
      color: #8e44ad;
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
    
    h1 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 20px;
      line-height: 1.2;
    }
    
    .description {
      font-size: 1rem;
      color: #dcdde1;
      margin-bottom: 30px;
      max-width: 500px;
      line-height: 1.6;
    }
    
    .btn-group {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }
    
    .btn {
      display: inline-block;
      padding: 12px 30px;
      border-radius: 30px;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
    }
    
    .btn-primary {
      background-color: #8e44ad;
      color: white;
      border: none;
    }
    
    .btn-secondary {
      background-color: transparent;
      color: white;
      border: 1px solid white;
    }
    
    .image-content {
      flex: 1;
      min-width: 300px;
      position: relative;
    }
    
    .image-content img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        text-align: center;
      }
      
      .description {
        margin-left: auto;
        margin-right: auto;
      }
      
      .btn-group {
        justify-content: center;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="text-content">
          <div class="welcome">Welcome</div>
          <h1>Best Learning<br>Opportunities</h1>
          <p class="description">
            Every day brings with it a fresh set of learning possibilities.
          </p>
          <div class="btn-group">
            <a href="#" class="btn btn-primary">Get Quote Now</a>
            <a href="#" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
        <div class="image-content">
          <img src="assets/hero-girl.png" alt="Students learning">
        </div>
      </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);