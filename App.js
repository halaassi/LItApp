import { LitElement, html, css } from 'lit';
import './components/HeroSection.js';
import './components/StatsSection.js';
import './components/ClientSection.js';
import './components/CoursesSection.js';
import './components/TestimonialsSection.js';
import './components/FooterSection.js';

class App extends LitElement {
  render() {
    return html`
      <hero-section></hero-section>
      <stats-section></stats-section>
      <client-section></client-section>
      <courses-section></courses-section>
      <testimonials-section></testimonials-section>
      <footer-section></footer-section>
    `;
  }
}

customElements.define('main-app', App);
