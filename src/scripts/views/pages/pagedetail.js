import { detailplate } from '../templates/template-creator';

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
    const detail = document.querySelector('#detailers');
    detail.innerHTML += detailplate;
  },
};
export default Detail;
