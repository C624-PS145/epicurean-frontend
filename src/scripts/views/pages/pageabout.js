import { aboutplate } from '../templates/template-creator';

const About = {
  async render() {
    return `
    <div class="toggleback">
        <a href="#/pagehome"> <span>←</span> Kembali </a>
    </div>

    <div class="abouters" id ="abouters">

    <div class="label">
        <section>
            <h2>About</h2>
        </section>
    </div>
    
    
    </div>
    `;
  },

  async afterRender() {
    const about = document.querySelector('#abouters');
    about.innerHTML += aboutplate;
  },
};
export default About;
