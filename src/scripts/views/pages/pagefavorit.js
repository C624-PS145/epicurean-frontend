import FavoriteWisataIdb from '../../data/favoriteWisataIdb';
import { daftarfavorit } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `

    <div class="toggleback">
        <a id="back-button" href="#"><i class="gg-arrow-left-o"></i>Kembali</a>
      </div>
      
      <article class="daftar_favorit">
        <div class="label">
          <section>
            <h2>Bookmark</h2>
            <p>Berikut adalah daftar wisata kuliner yang anda sukai.</p>
          </section>
        </div>
        <div id="wisata-list" class="list-item"></div> 
      </article>
    `;
  },

  async afterRender() {
    const wisataListContainer = document.querySelector('#wisata-list');
    const wisata = await FavoriteWisataIdb.getallfavrest();

    if (wisata.length === 0) {
      wisataListContainer.innerHTML = '<p>Tidak ada wisata kuliner yang disukai.</p>';
    } else {
      wisata.forEach((item) => {
        const wisataElement = document.createElement('div');
        wisataElement.innerHTML = daftarfavorit(item);
        wisataElement.querySelector('.remove-button').addEventListener('click', async () => {
          await FavoriteWisataIdb.deletefavrest(item.id);
          wisataElement.remove();
        });
        wisataListContainer.appendChild(wisataElement);
      });
    }
  },
};

export default Favorites;
