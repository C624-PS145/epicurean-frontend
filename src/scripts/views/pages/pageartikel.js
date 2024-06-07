import EpicureanApiSource from '../../data/sourceAPI';
import { createArtikelTemplate } from '../templates/template-creator';

const PageArtikel = {
  async render() {
    return `

    <div class="toggleback">
         <a id="back-button" href="#"><i class="gg-arrow-left-o"></i>Kembali</a>
    </div>
    <div class="zonaartikel">
      <div class="label">
        <section>
          <h2>Madura Information Zone</h2>
          <p>Akes informasi terbaru seputar madura, jika anda pernah berkunjung bagikan pengalamanmu disini</p>
        </section>
      </div>

      <div class="kontenartikel">  
        
        <div class="searchart">
          <input type="text" id="searchInput" placeholder="Search articles...">
        </div>
        
        <div id="articlesList"></div>

        <div class="formulir">
          <h3>Post my article</h3>
          <p>Posting pengalamanmu tentang madura baik wisata dan kuliner disini </p>
          <form id="addArticleForm">
            <input type="text" id="judul" name="judul" placeholder="Title" required>
            <input type="text" id="penulis" name="penulis" placeholder="Author" required>
            <textarea id="deskripsi" name="deskripsi" placeholder="Description" required></textarea>
            <textarea id="isi" name="isi" placeholder="Content" required></textarea>
            <input type="file" id="gambar_artikel" name="gambar_artikel" accept="image/*" required>
            <button type="submit">Send my Article</button>
          </form> 
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const articlesList = document.querySelector('#articlesList');
    const addArticleForm = document.querySelector('#addArticleForm');
    const searchInput = document.querySelector('#searchInput');

    const renderArticles = async (query = '') => {
      try {
        const articles = await EpicureanApiSource.listAllArtikel();
        articlesList.innerHTML = ''; // Clear current articles
        // eslint-disable-next-line max-len
        const filteredArticles = articles.filter((article) => article.judul.toLowerCase().includes(query.toLowerCase())
          || article.deskripsi.toLowerCase().includes(query.toLowerCase()));

        if (filteredArticles.length > 0) {
          filteredArticles.forEach((artikel) => {
            articlesList.innerHTML += createArtikelTemplate(artikel);
          });
        } else {
          articlesList.innerHTML = '<p>Informasi artikel yang anda cari tidak ditemukan.</p>';
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
        articlesList.innerHTML = '<p>Failed to fetch articles.</p>';
      }
    };

    addArticleForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(addArticleForm);

      try {
        await EpicureanApiSource.createArtikel(formData);
        alert('Article added successfully!');
        window.location.reload(); // Refresh page after adding article
      } catch (error) {
        console.error('Error adding article:', error);
        alert('Failed to add article.');
      }
    });

    searchInput.addEventListener('input', (event) => {
      renderArticles(event.target.value);
    });

    // Initial render
    renderArticles();
  },
};

export default PageArtikel;
