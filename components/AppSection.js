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
import './Testimonials.js';

class AppSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Arial', sans-serif;
    }
  `;

  render() {
    return html`
      <header-section></header-section>
      <hero-section></hero-section>
      <stats-section></stats-section>
      <expert-section></expert-section>
      <client-matters-section></client-matters-section>
      <popular-courses-section></popular-courses-section>
      <popular-course></popular-course>
      <TestimonialsSection></TestimonialsSectionn>
      <Testimonials></Testimonials>
      <team-courses-section></team-courses-section>

      <newsletter-section></newsletter-section>
      <footer-section></footer-section>
    `;
  }
}

customElements.define('my-app', AppSection);