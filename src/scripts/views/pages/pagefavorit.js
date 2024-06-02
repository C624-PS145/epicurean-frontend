// pages/favorites.js
import FavoriteWisataIdb from '../../data/favoriteWisataIdb';
import { createWisataItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `

       <article class="allkuliner">
        <div class="label">
          <section>
            <h2>Kuliner</h2>
            <p>Temukan informasi wisata kuliner madura yang mungkin belum pernah anda coba</p>
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
        wisataListContainer.innerHTML += createWisataItemTemplate(item);
      });
    }
  },
};

export default Favorites;
