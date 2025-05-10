import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

export class TeamCoursesSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color:#16244E;
      color: white;
      margin: 0;
      padding: 0;
      width: 100%;
      font-family: 'Arial', sans-seri
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 0;
      text-align: center;
    }

    .section-subtitle {
      color: #8e44ad;
      font-weight: bold;
      margin-bottom: 15px;
      font-size: 1rem;
      text-transform: uppercase;
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

    .team-members {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }

    .team-card {
      background: white;
      border-radius: 15px;
      // padding: 20px;
      width: 220px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }

    .team-card:hover {
      transform: translateY(-10px);
    }

    .team-card img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      margin-bottom: 15px;
    }

    .team-member-name {
      font-size: 1.1rem;
      font-weight: bold;
      color: #111;
      margin-bottom: 5px;
    }

    .team-member-role {
      font-size: 0.9rem;
      color: #888;
      margin-bottom: 15px;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    .social-icons a {
      color: #8e44ad;
      font-size: 1.2rem;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .team-members {
        flex-direction: column;
        align-items: center;
      }

      .team-card {
        width: 80%;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="section-subtitle">Team</div>
        <h2 class="section-title">Watch our Courses</h2>
        <p class="section-description">
          Problems trying to resolve the conflict between<br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>

        <div class="team-members">
          ${this.renderCard("assets/t4.png")}
          ${this.renderCard("assets/t3.png")}
          ${this.renderCard("assets/t2.png")}
          ${this.renderCard("assets/t1-.png")}
        </div>
      </div>
    `;
  }

  renderCard(imageSrc) {
    return html`
      <div class="team-card">
        <img src="${imageSrc}" alt="Team Member">
        <div class="team-member-name">Julian Jameson</div>
        <div class="team-member-role">Profession</div>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    `;
  }
}

customElements.define('team-courses-section', TeamCoursesSection);
