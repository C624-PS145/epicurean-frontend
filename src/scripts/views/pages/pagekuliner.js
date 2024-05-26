import RestaurantApiSource from '../../data/sourcerestoAPI';
import { allkuliner, searchkuliner } from '../templates/template-creator';

const Pagekuliner = {
  async render() {
    return `
<div class="toggleback">
<a href="#/pagehome"> <span>←</span> Kembali </a>
</div>

<article class="allkuliner">
    <div class="label">
      <section>
        <h2>Kuliner</h2>
        <p>Temukan informasi wisata kuliner madura yang mungkin belum pernah anda coba</p>
      </section>
      </div>

      <div id="search" class="searchkuliner"></div>
      
      <div id="allkulin" class="list-item"></div> 

</article>
<div id="loading" class="loadingsignal"></div> 
    
    `;
  },

  async afterRender() {
    const search = document.querySelector('#search');
    const allkulinerkontainer = document.querySelector('#allkulin');
    const loadingElement = document.querySelector('#loading');
    try {
      search.innerHTML += searchkuliner;
      const defallkulin = await RestaurantApiSource.apikontenresto();
      defallkulin.forEach((allkul) => {
        allkulinerkontainer.innerHTML += allkuliner(allkul);
      });
    } catch (error) {
      console.error('gagal melakukan fetch restoran:', error);
      allkulinerkontainer.innerHTML = '<p>Gagal menampilkan data pastikan terhubung koneksi internet  dan <span class="refresh" onclick="location.reload()">refresh</span> kembali   .</p>';
    } finally {
      loadingElement.style.display = 'none';
    }
  },
};
export default Pagekuliner;
