import EpicureanApiSource from '../../data/sourceAPI';
import { allkuliner, searchkuliner } from '../templates/template-creator';

const Pagekuliner = {
  async render() {
    return `
      <div class="toggleback">
        <a id="back-button" href="#"><i class="gg-arrow-left-o"></i>Kembali</a>
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
      <div id="loading" class="loadingsignal"></div>`;
  },

  async afterRender() {
    const search = document.querySelector('#search');
    const allkulinerContainer = document.querySelector('#allkulin');
    const loadingElement = document.querySelector('#loading');

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
      history.back();
    });

    search.innerHTML = searchkuliner();

    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      allkulinerContainer.innerHTML = ''; // Clear previous results
      loadingElement.style.display = 'block';

      const namaTempat = document.getElementById('namaTempat').value;
      const kabupaten = document.getElementById('kabupaten').value;
      const avgRating = document.getElementById('avgRating').value;
      const makanan = document.getElementById('makanan').value;

      try {
        // eslint-disable-next-line max-len
        const searchResults = await EpicureanApiSource.searchkuliner(namaTempat, kabupaten, avgRating, makanan);
        if (searchResults.length > 0) {
          searchResults.forEach((result) => {
            allkulinerContainer.innerHTML += allkuliner(result);
          });
        } else {
          allkulinerContainer.innerHTML = '<p>Tidak ada hasil ditemukan</p>';
        }
      } catch (error) {
        console.error('Gagal melakukan pencarian:', error);
        allkulinerContainer.innerHTML = '<p>Gagal melakukan pencarian. Pastikan koneksi internet dan coba lagi.</p>';
      } finally {
        loadingElement.style.display = 'none';
        this._addDetailButtonListeners();
      }
    });

    try {
      loadingElement.style.display = 'block';
      const defaultKuliner = await EpicureanApiSource.searchkuliner();
      defaultKuliner.forEach((kuliner) => {
        allkulinerContainer.innerHTML += allkuliner(kuliner);
      });
    } catch (error) {
      console.error('Gagal melakukan fetch kuliner:', error);
      allkulinerContainer.innerHTML = '<p>Gagal menampilkan data. Pastikan terhubung koneksi internet dan <span class="refresh" onclick="location.reload()">refresh</span> kembali.</p>';
    } finally {
      loadingElement.style.display = 'none';
      this._addDetailButtonListeners();
    }
  },

  _addDetailButtonListeners() {
    const detailButtons = document.querySelectorAll('.detail-button');
    detailButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const id = event.currentTarget.getAttribute('data-id');
        window.location.hash = `#/detail/${id}`;
      });
    });
  },
};

export default Pagekuliner;
