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
            <p>Zona informasi informasi seputar madura, ayo tambahkan juga artikelmu disini</p>
          </section>
        </div>

        <div class="kontenartikel">

        <form id="addArticleForm">
        <input type="text" id="judul" name="judul" placeholder="Title" required>
        <input type="text" id="penulis" name="penulis" placeholder="Author" required>
        <textarea id="deskripsi" name="deskripsi" placeholder="Description" required></textarea>
        <textarea id="isi" name="isi" placeholder="Content" required></textarea>
        <input type="file" id="gambar_artikel" name="gambar_artikel" accept="image/*" required>
        <button type="submit">Add Article</button>
        </form> 

        <div id="articlesList"></div>

        </div>
        
    </div>
    `;
  },

  async afterRender() {
    const articlesList = document.querySelector('#articlesList');
    const addArticleForm = document.querySelector('#addArticleForm');

    addArticleForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(addArticleForm);

      try {
        await EpicureanApiSource.createArtikel(formData);
        alert('Article added successfully!');
        window.location.reload();
      } catch (error) {
        console.error('Error adding article:', error);
        alert('Failed to add article.');
      }
    });

    try {
      const articles = await EpicureanApiSource.listAllArtikel();
      articlesList.innerHTML = '';
      articles.forEach((artikel) => {
        articlesList.innerHTML += createArtikelTemplate(artikel);
      });
    } catch (error) {
      console.error('Error fetching articles:', error);
      articlesList.innerHTML = '<p>Failed to fetch articles.</p>';
    }
  },
};
export default PageArtikel;
