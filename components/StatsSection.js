import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class StatsSection extends LitElement {
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
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 30px;
      text-align: center;
    }
    
    .stat-item {
      padding: 20px;
    }
    
    .stat-number {
      font-size: 3rem;
      font-weight: bold;
      color: #8B5CF6;
      margin-bottom: 10px;
    }
    
    .stat-label {
      font-size: 1.1rem;
      color: #dcdde1;
    }
    
    .expert-section {
      margin-top: 80px;
      display: flex;
      align-items: center;
      gap: 60px;
    }
    
    .expert-content {
      flex: 1;
    }
    
    .expert-image {
      flex: 1;
      position: relative;
    }
    
    .expert-image img {
      width: 100%;
      border-radius: 10px;
    }
    
    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background-color: #8e44ad;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    
    .section-title {
      font-size: 2.2rem;
      font-weight: bold;
      margin-bottom: 20px;
    }
    
    .section-description {
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
    }
    
    @media (max-width: 768px) {
      .expert-section {
        flex-direction: column;
      }
      
      .stats-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    @media (max-width: 480px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="stats-grid">
          ${this.renderStatItem('15K', 'Happy Customers')}
          ${this.renderStatItem('150K', 'Monthly Visitors')}
          ${this.renderStatItem('1S', 'Countries Worldwide')}
          ${this.renderStatItem('100+', 'Top Partners')}
        </div>
        
      
      </div>
    `;
  }

  renderStatItem(number, label) {
    return html`
      <div class="stat-item">
        <div class="stat-number">${number}</div>
        <div class="stat-label">${label}</div>
      </div>
    `;
  }
}

customElements.define('stats-section', StatsSection);