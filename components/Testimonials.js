import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class TestimonialsSection extends LitElement {
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
      text-align: center;
    }
    
    .section-subtitle {
      color: #8e44ad;
      font-weight: bold;
      margin-bottom: 15px;
      font-size: 1rem;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 20px;
    }
    
    .section-description {
      max-width: 700px;
      margin: 0 auto 40px;
      color: #dcdde1;
      line-height: 1.6;
    }
    
    .testimonial-card {
      background: white;
      color: #333;
      border-radius: 10px;
      padding: 40px;
      max-width: 600px;
      margin: 0 auto;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .testimonial-text {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 30px;
      color: #555;
      text-align: center;
    }
    
    .stars {
      color: #f1c40f;
      font-size: 1.5rem;
      margin-bottom: 15px;
      letter-spacing: 3px;
    }
    
    .author-name {
      font-weight: bold;
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 5px;
    }
    
    .author-title {
      color: #8e44ad;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .testimonial-card {
        padding: 30px 20px;
      }
      
      .testimonial-text {
        font-size: 1rem;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="section-subtitle">Testimonials</div>
        <h2 class="section-title">Get Quality Education</h2>
        <p class="section-description">
          Problems trying to resolve the conflict between<br>
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        
        <div class="testimonial-card">
          <p class="testimonial-text">
            State helps you see how many more days you need to work to reach your financial
            goal for the month and year.
          </p>
          <div class="stars">★★★★☆</div>
          <div class="author-name">Regina Miles</div>
          <div class="author-title">Designer</div>
        </div>
      </div>
    `;
  }
}

customElements.define('testimonials-section', TestimonialsSection);