import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class ExpertSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #25345D;
      padding: 80px 20px;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 60px;
    }
    
    
    .image-box {
      flex: 1;
      min-width: 300px;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      order: 1; 
    }
    
    .text-box {
      flex: 1;
      min-width: 300px;
      order: 2;
    }
    
    .red-line {
      width: 40px;
      height: 4px;
      background-color: #e74c3c;
      margin-bottom: 20px;
    }
    
    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 20px;
      color: #FFFFFF;
    }
    
    p {
      font-size: 1rem;
      color: #dcdde1; 
      margin-bottom: 30px;
      line-height: 1.6;
    }
    
    .learn-more {
      color: #8e44ad;
      font-weight: bold;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      transition: color 0.3s;
    }
    
    .learn-more:hover {
      color: #a569bd;
    }
    
    .image-box img {
      width: 100%;
      display: block;
      transition: transform 0.3s;
    }
    
    .image-box:hover img {
      transform: scale(1.03);
    }
    
    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background: #8e44ad;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 8px 16px rgba(0,0,0,0.3);
      transition: transform 0.3s, background 0.3s;
    }
    
    .play-button:hover {
      transform: translate(-50%, -50%) scale(1.1);
      background: #9b59b6;
    }
    
    .play-icon {
      width: 0;
      height: 0;
      border-left: 12px solid white;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      margin-left: 4px;
    }
    
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }
      
      .image-box, .text-box {
        order: initial; 
      }
      
      .text-box {
        text-align: center;
      }
      
      .red-line {
        margin-left: auto;
        margin-right: auto;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="image-box">
          <img src="assets/teacher-girl.png" alt="Expert teacher">
          <div class="play-button">
            <div class="play-icon"></div>
          </div>
        </div>
        
        <div class="text-box">
          <div class="red-line"></div>
          <h2>Our Experts Teacher</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <a href="#" class="learn-more">Learn More →</a>
        </div>
      </div>
    `;
  }
}

customElements.define('expert-section', ExpertSection);