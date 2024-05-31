import { detailplate } from '../templates/template-creator';
import EpicureanApiSource from '../../data/sourceAPI';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
    <div class="toggleback">
        <a href="#/pagehome"> <span>←</span> Kembali </a>
    </div>

    <div class="detailers" id ="detailers">

      <div class="label">
          <section>
              <h2>Detail Kuliner</h2>
          </section>
      </div>    
    
    </div>
    `;
  },

  async afterRender() {
    const detailkontainer = document.querySelector('#detailers');

    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const apidetailkuliner = await EpicureanApiSource.wisatakulinerid(url.id);

      detailkontainer.innerHTML += detailplate(apidetailkuliner);
    } catch (error) {
      console.error('gagal melakukan fetch detail wisata kuliner:', error);
      detailkontainer.innerHTML = '<p>Gagal menampilkan data pastikan terhubung koneksi internet  dan <span class="refresh" onclick="location.reload()">refresh</span> kembali   .</p>';
    }
  },
};
export default Detail;