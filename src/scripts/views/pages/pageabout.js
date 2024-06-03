import { aboutplate } from '../templates/template-creator';

const About = {
  async render() {
    return `
    <div class="toggleback">
         <a id="back-button" href="#"><i class="gg-arrow-left-o"></i>Kembali</a>
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
    // Menambahkan event listener pada tombol kembali
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
      history.back();
    });
    const about = document.querySelector('#abouters');
    about.innerHTML += aboutplate;
  },
};
export default About;
