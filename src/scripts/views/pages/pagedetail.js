import { detailplate } from '../templates/template-creator';
import EpicureanApiSource from '../../data/sourceAPI';
import UrlParser from '../../routes/url-parser';
import initReviewForm from '../../utils/reviewUtils';

const Detail = {
  async render() {
    return `
    <div class="toggleback">
         <a id="back-button" href="#"> <span>←</span> Kembali </a>
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
    // Menambahkan event listener pada tombol kembali
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
      history.back();
    });

    const detailkontainer = document.querySelector('#detailers');

    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const apidetailkuliner = await EpicureanApiSource.wisatakulinerid(url.id);

      detailkontainer.innerHTML += detailplate(apidetailkuliner);
      initReviewForm(url.id);
    } catch (error) {
      console.error('gagal melakukan fetch detail wisata kuliner:', error);
      detailkontainer.innerHTML = '<p>Gagal menampilkan data, pastikan terhubung koneksi internet dan <span class="refresh" onclick="location.reload()">refresh</span> kembali.</p>';
    }
  },
};

export default Detail;
