import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';
import './HeaderSection.js';
import './HeroSection.js';
import './StatsSection.js';
import './ExpertSection.js';
import './ClientMattersSection.js';
import './PopularCoursesSection.js';
import './TestimonialsSection.js';
import './TestimonialsSection.js';
import './FooterSection.js';
import './PopularCourse.js';
import './TeamCoursesSection.js';


class AppSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Arial', sans-serif;
   
    }

    /* Global Styles */
    body {
      font-family: 'Arial', sans-serif;
    }

    /* Container for layout */
    .container {
      width: 100%;
    }




    
    /* Add some specific responsive rules for each section */
    @media (max-width: 1024px) {
      /* Modify layout for medium-sized screens */
      hero-section {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 600px) {
      /* Small screen adjustments */
      hero-section {
        font-size: 1.2rem;
      }
     
    }
  `;

  render() {
    return html`
      <div class="container">
        <header-section></header-section>
        <hero-section></hero-section>
        <stats-section></stats-section>
        <expert-section></expert-section>
        <client-matters-section></client-matters-section>
        <popular-courses-section></popular-courses-section>
        <popular-course></popular-course>
        <testimonials-section></testimonials-section>
        <testimonials></testimonials>
        <team-courses-section></team-courses-section>
        <newsletter-section></newsletter-section>
        <footer-section></footer-section>
      </div>
    `;
  }
}

customElements.define('my-app', AppSection);
