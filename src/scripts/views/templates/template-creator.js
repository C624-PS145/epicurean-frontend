// import CONFIG from '../../globals/configure';

const daftarpopuler = (populer) => `
<article>
  <img src="./images/sinjay.jpg" alt="gambar wisata kuliner">
  <p class="lok">Bangkalan</p>
  <h3><a href="#/detail/${populer.id}">Bebek Sinjai </a></h3>
  <p>Buka 08.00-21.00 <span>&#9733;5</span></p>
  <section>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
  <div><button>
  <a href="#/detail/${populer.id}">  Detail<span>→</span></a>
  </button></div>


  </section> 
</article>`;
const daftartestimoni = (testimoni) => `
<article>
  <img src="./images/sinjay.jpg" alt="gambar wisata kuliner">
  <h3><a href="#/detail/${testimoni.id}">Bebek Sinjai </a></h3>
  <section>
    <h4>Yondaime Hokage</h4>
    <p>&#9733;5</p>
    <span>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
    </span>
  </section> 
</article>`;
const allkuliner = (kuliner) => `
<article>
  <img src="./images/sinjay.jpg" alt="gambar wisata kuliner">
  <p class="lok">Bangkalan</p>
  <h3><a href="#/detail/${kuliner.id}">Bebek Sinjai </a></h3>
  <p>Buka 08.00-21.00 <span>&#9733;5</span></p>
  <section>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
  <div><button>Detail<span>→</span></button></div>
  </section> 
</article>`;

const searchkuliner = `
<form id="searchForm" class="searching">
  <div class="input">
    <input type="text" id="searchInput" name="query" placeholder="Search anything...." required>
    <button type="submit" id="searchButton">⌕</button>
  </div>
  <div class="dropdown">
  <button class="dropbtn">⌨</button>
  <div class="dropdown-content">
      <a href="#">Bangkalan</a>
      <a href="#">Sampang</a>
      <a href="#">Pamekasan</a>
      <a href="#">Sumenep</a>
  </div>
</div>
</form>`;

const aboutplate = `
<div class="developer">
    <h2>Developer.</h2>
    <div class="developer-container">
        <div class="anggota-developer">
            <img src="./images/yohan.jpg" alt="Profil Yohan Permana">
            <h3>Yohan Permana</h3>
            <p>Front-End 1 Web Dev</p>
            <div class="github">
                <img src="./images/github.png" alt="Github">
                <p>YohanpermanaRepository</p>
            </div>
        </div>
        <div class="anggota-developer">
            <img src="./images/jahfal.jpg" alt="Profil Jahfal Azzuhri Subroto">
            <h3>Jahfal Azzuhri S</h3>
            <p>Front-End 2 Web Dev</p>
            <div class="github">
            <img src="./images/github.png" alt="Github">
                <p>jahfal1987</p>
            </div>
        </div>
        <div class="anggota-developer">
            <img src="./images/hikmal.jpg" alt="Profil M Nur Hikmal A">
            <h3>M Nur Hikmal A</h3>
            <p>Back End Web Dev</p>
            <div class="github">
            <img src="./images/github.png" alt="Github">
                <p>HikmalRepository</p>
            </div>
        </div>
    </div> 
</div>


<div class="visi-misi">
    <h2>Visi Misi</h2>
    <div class="visi-misi-container">
        <div class="visi">
            <h3>Visi</h3>
            <ul>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
            </ul>
        </div>
        <div class="misi">
            <h3>Misi</h3>
            <ul>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
            </ul>
        </div>
    </div>
</div>`;

const detailplate = `

`;

export {
  daftarpopuler,
  daftartestimoni,
  allkuliner,
  searchkuliner,
  aboutplate,
  detailplate,
};
