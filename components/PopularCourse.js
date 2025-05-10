import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class PopularCourse extends LitElement {
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
    
    .content-wrapper {
      display: flex;
      align-items: center;
      gap: 60px;
    }
    
    

    .image-content {
      flex: 1;
    }
    
    .image-content img {
      width: 100%;
      border-radius: 10px;
    }
    
    .text-content {
      flex: 1;
    }
    
    .section-subtitle {
      color: #8e44ad;
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 1rem;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 20px;
      line-height: 1.2;
    }
    
    .section-description {
      color: #dcdde1;
      line-height: 1.6;
      margin-bottom: 30px;
    }
    
    .next-courses-btn {
      padding: 12px 30px;
      background-color: #8e44ad;
      color: white;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .next-courses-btn:hover {
      background-color: #7d3c98;
    }
    
    @media (max-width: 768px) {
      .content-wrapper {
        flex-direction: column;
      }
      
      .text-content {
        text-align: center;
        margin-top: 30px;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="content-wrapper">
          <div class="image-content">
            <img src="assets/Placeholder copy.png" alt="Popular courses illustration">
          </div>
          
          <div class="text-content">
            <div class="section-subtitle">Our Popular Courses </div>
            <p class="section-description">
              Problems trying to resolve the conflict between<br>
              the two major realms of Classical physics:<br>
              Newtonian mechanics
            </p>
            
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('popular-course', PopularCourse);