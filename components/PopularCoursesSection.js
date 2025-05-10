import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class PopularCoursesSection extends LitElement {
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
      margin-bottom: 60px;
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
      max-width: 700px;
      line-height: 1.6;
    }
    
    .courses {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: flex-start; /* تغيير من center إلى flex-start */
    }
    
    .course-card {
      background: white;
      color: #000;
      border-radius: 10px;
      overflow: hidden;
      width: 280px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      transition: transform 0.3s;
    }
    
    .course-card:hover {
      transform: translateY(-5px);
    }
    
    .course-image {
      position: relative;
      height: 180px;
      overflow: hidden;
    }
    
    .course-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .sale-badge {
      position: absolute;
      top: 10px;
      left: 10px;
      background-color: #e74c3c;
      color: white;
      padding: 3px 8px;
      font-size: 0.75rem;
      border-radius: 5px;
    }
    
    .card-body {
      padding: 20px;
      text-align: left;
    }
    
    .category {
      font-size: 0.85rem;
      color: #8e44ad;
      font-weight: bold;
      margin-bottom: 5px;
    }
    
    .rating {
      color: #f1c40f;
    }
    
    .title {
      font-weight: bold;
      margin: 5px 0 10px 0;
      font-size: 1.1rem;
    }
    
    .course-description {
      color: #555;
      font-size: 0.9rem;
      line-height: 1.5;
      margin-bottom: 15px;
    }
    
    .info {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      color: #888;
      margin-bottom: 15px;
    }
    
    .price {
      font-size: 1rem;
    }
    
    .old-price {
      text-decoration: line-through;
      color: #999;
      margin-right: 5px;
    }
    
    .new-price {
      color: #e74c3c;
      font-weight: bold;
    }
    
    .btn {
      display: inline-block;
      padding: 8px 20px;
      background-color: #8e44ad;
      color: white;
      border-radius: 20px;
      font-size: 0.9rem;
      text-decoration: none;
      margin-top: 10px;
      transition: background-color 0.3s;
    }
    
    .btn:hover {
      background-color: #7d3c98;
    }
    
    .next-btn {
      margin-top: 50px;
      padding: 12px 30px;
      background-color: #8e44ad;
      color: white;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .next-btn:hover {
      background-color: #7d3c98;
    }
    
    @media (max-width: 768px) {
      .courses {
        justify-content: center;
      }
      
      .header-content, h2, .description {
        text-align: center;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="header-content">
          <h2>Our Popular Courses</h2>
          <p class="description">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        
        <div class="courses">
          ${this.renderCourseCard('Training Courses', 'Welcome', '16.48', '6.48', '4.9', 'assets/image.png')}
          ${this.renderCourseCard('2,769 online courses', 'Welcome', '16.48', '6.48', '4.9', 'assets/product-cover-131.png')}
          ${this.renderCourseCard('Books Library', 'Welcome', '16.48', '6.48', '4.9', 'assets/product-cover-130 sec-.png')}
        </div>
        
      </div>
    `;
    
  }

  renderCourseCard(title, category, oldPrice, newPrice, rating, image) {
    return html`
      <div class="course-card">
        <div class="course-image">
          <img src="${image}" alt="${title}">
          <div class="sale-badge">Sale</div>
        </div>
        <div class="card-body">
          <div class="category">${category} <span class="rating">⭐ ${rating}</span></div>
          <div class="title">${title}</div>
          <div class="course-description">We focus on ergonomics and meeting you...</div>
          <div class="info">
            <div>📥 15 Sales</div>
          </div>
          <div class="price">
            <span class="old-price">$${oldPrice}</span>
            <span class="new-price">$${newPrice}</span>
          </div>
          <a href="#" class="btn">Learn More →</a>
        </div>
      </div>
    `;
  }
}

customElements.define('popular-courses-section', PopularCoursesSection);