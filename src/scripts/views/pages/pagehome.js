import EpicureanApiSource from '../../data/sourceAPI';
import { daftarpopuler, aboutmadura } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <jumbo-tron class="jumbotron"></jumbo-tron>
    <article class="populer">
      <div class="label">
        <section>
          <h2>Wisata kuliner terpopuler</h2>
          <p>Lorem Ipsum is simply dummy text of </p>
        </section>
      <button>View All</button>
      </div>
      <div id="dafpop" class="list-item"></div> 
    </article>
    <div id="loading" class="loadingsignal"></div> 

    <article class="testimoni">
      <div class="label">
        <section>
          <h2>Review Terbaru</h2>
          <p>Lorem Ipsum is simply dummy text of </p>
        </section>
      </div>
      <div id="daftes" class="list-item2"></div>
    </article>

    <article class="aboutmadura" id="aboutmadura"></article>


    `;
  },

  async afterRender() {
    const kontainerKuliner = document.querySelector('#dafpop');
    const kontaineraboutmadura = document.querySelector('#aboutmadura');
    kontaineraboutmadura.innerHTML += aboutmadura;
    const loadingElement = document.querySelector('#loading');
    try {
      const daftarKuliner = await EpicureanApiSource.wisatakulinerpopuler();
      daftarKuliner.forEach((kuliner) => {
        kontainerKuliner.innerHTML += daftarpopuler(kuliner);
      });
    } catch (error) {
      console.error('gagal melakukan fetch wisata kuliner:', error);
      kontainerKuliner.innerHTML = '<p>Gagal menampilkan data pastikan terhubung koneksi internet  dan <span class="refresh" onclick="location.reload()">refresh</span> kembali   .</p>';
    } finally {
      loadingElement.style.display = 'none';
    }
  },
};
export default Home;
