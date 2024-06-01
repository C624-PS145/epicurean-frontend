import EpicureanApiSource from '../../data/sourceAPI';
import { daftarpopuler, aboutmadura, daftartestimoni } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <jumbo-tron class="jumbotron"></jumbo-tron>
    <article class="populer">
      <div class="label">
        <section>
          <h2>Wisata kuliner terpopuler</h2>
          <p>
          Berikut adalah tiga wisata kuliner terpopuler di Madura yang paling disukai oleh para pecinta kuliner.
          </p>
        </section>
      <button id="viewAllButton" >View All</button>
      </div>
      <div id="dafpop" class="list-item"></div> 
    </article>
    <div id="loading" class="loadingsignal"></div> 

    <article class="testimoni">
      <div class="label">
        <section>
          <h2>Review Terbaru</h2>
          <p>Baca ulasan terbaru dari para pecinta kuliner yang telah menikmati hidangan-hidangan lezat di Madura</p>
        </section>
      </div>
      <div id="daftes" class="list-item2"></div>
    </article>

    <article class="aboutmadura" id="aboutmadura"></article>
    `;
  },

  async afterRender() {
    const kontainerPopuler = document.querySelector('#dafpop');
    const kontainerbestreview = document.querySelector('#daftes');

    const kontaineraboutmadura = document.querySelector('#aboutmadura');
    kontaineraboutmadura.innerHTML += aboutmadura;
    const loadingElement = document.querySelector('#loading');

    const viewAllButton = document.querySelector('#viewAllButton');
    viewAllButton.addEventListener('click', () => {
      window.location.hash = '#/pagekuliner';
    });

    try {
      const daftarKuliner = await EpicureanApiSource.wisatakulinerpopuler();
      daftarKuliner.forEach((kuliner) => {
        kontainerPopuler.innerHTML += daftarpopuler(kuliner);
      });
      const daftarKuliner2 = await EpicureanApiSource.reviewterbarudanterbaik();
      daftarKuliner2.forEach((kuliner) => {
        kontainerbestreview.innerHTML += daftartestimoni(kuliner);
      });
    } catch (error) {
      console.error('gagal melakukan fetch wisata kuliner:', error);
      kontainerPopuler.innerHTML = '<p>Gagal menampilkan data pastikan terhubung koneksi internet  dan <span class="refresh" onclick="location.reload()">refresh</span> kembali   .</p>';
    } finally {
      loadingElement.style.display = 'none';
    }
  },
};
export default Home;
