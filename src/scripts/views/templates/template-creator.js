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
  <img src="${kuliner.gambar_restauran}">
  <p class="lok"></p>
  <h3><a href="#/detail/${kuliner.id}">${kuliner.nama_restauran} </a></h3>
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
const aboutmadura = `

<div class="label">
    <section>
        <h2>About Madura</h2>
    </section>
</div>
<article>
    <div>
    <section>
        <p>Dari sisi kuliner, Madura adalah surga bagi pecinta makanan. 
            Dengan kekayaan bahan-bahan alami dan rempah-rempah, setiap hidangan Madura menghadirkan kelezatan yang tidak terlupakan. Dari sate kambing Madura yang terkenal hingga bebek panggang dan sop ikan, setiap gigitan adalah 
            sebuah petualangan kuliner yang memanjakan lidah Anda dengan citarasa yang otentik dan memikat hati siapa pun yang mencicipinya. Selamat menelusuri
            kelezatan dari pulau yang penuh pesona ini!.
        </p>
        <div>
            <h3>Alexandr Ivchenko</h3>
            <p>National  Epicurean</p>
        </div>
    </section>
    <figure>
        <img src="./images/image.png" alt="gambar madura">
    </figure>
    </div>
</article>

`;

const aboutplate = `

<div class="developer">

    <h2>Developer.</h2>

    <div class="developer-container">

        <div class="agtdev">
            <img src="./images/yohan.jpg" alt="Profil Yohan Permana">
            <h3>Yohan Permana</h3>
            <p>Front-End 1 Web Dev</p>
            
            <section class="github">
                <img src="./images/github.png" alt="Github">
                <p>YohanpermanaRepository</p>
            </section>
        </div>

        <div  class="agtdev">
            <img src="./images/jahfal.jpg" alt="Profil Jahfal Azzuhri Subroto">
            <h3>Jahfal Azzuhri S</h3>
            <p>Front-End 2 Web Dev</p>
            
            <section class="github">
            <img src="./images/github.png" alt="Github">
                <p>jahfal1987</p>
            </section>
        </div>

        <div  class="agtdev">
            <img src="./images/hikmal.jpg" alt="Profil M Nur Hikmal A">
            <h3>M Nur Hikmal A</h3>
            <p>Back End Web Dev</p>

            <section class="github">
            <img src="./images/github.png" alt="Github">
                <p>HikmalRepository</p>
            </section>
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

const detailplate = (detail) => `

<div class="informasi">

<section class="informasidangambar">

    <div class="detailgambar-kontainer">
      <img src="${detail.gambar_restauran}" alt="gambar wistaa kuliner">
    </div>

    <div>
        <h2>${detail.nama_restauran}</h2>
        <p>Alamat : Jl. Telang indah gang asri no 21 kec. kamal </p>
        <p>Kabupaten : <span>Bangkalan</span></p>
        
        <div class="deskripsi">
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        </div>

        <section class="pemesanan">
            <p>informasi pemesanan : <a href="">0867328378237</a></p>
            <p>Jam operasional : 08.00-05.00 wib</p>
            <P>Lokasi Google Maps :</P>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63319.6312330556!2d112.72847349020633!3d-7.300188377779806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f95b5bc53595%3A0x217712a51cef984b!2sBebek%20Sinjay%20Tidar!5e0!3m2!1sen!2sid!4v1716748252850!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>

    </div>

</section>


<section class="daftar-menu">
    <h2>Daftar Menu</h2>
    <div class="makan-minum">
      <div class="makan">
          <h3>Makanan</h3>

          <ul>${detail.foods.map((food) => `<li tabindex="0">${food.nama_makanan} <span> - Rp ${food.harga} </span></li>`).join('')}</ul>
         
          
      </div>
      <div class="minum"> 
          <h3>Minuman</h3>
          <li> Es Teh</span> <span>Rp. 4.000</span></li>
          <li> Es Jeruk</span> <span>Rp. 5.000</span></li>
          <li> Es Degan</span> <span>Rp. 8.000</span></li>
      </div>
    </div>

</section>

<section class="fasilitas">
<h2>Fasilitas</h2>
    <ul>
        <li>Free Wifi</li>
        <li>Parkir Luas</li>
        <li>Gazebo</li>
        <li>Toilet</li>
        <li>Area Merokok dan NON Merokok</li>
    </ul>
</section>

<section class="galeri">
<h2>Galeri</h2>
    <ul>
        <li><img src="./images/galeri13.png" alt="gambar1"></li>
        <li><img src="./images/galeri13.png" alt="gambar2"></li>
        <li><img src="./images/galeri13.png" alt="gambar3"></li>
    </ul>
</section>

<section class="form-review">
    <h2>Form Review</h2>

    <form class="form-review-container" action="#" method="post">


    <div class="nama-rating">
        <div class="form-group">
            <label for="name">Masukkan Nama</label>
            <input type="text" id="name" name="name" placeholder="example Yohan Permana" required>
        </div>
        
        <div class="form-group">
            <label for="rating">Masukkan Rating (1-5)</label>
            <select id="rating" name="rating" required>
                <option value="" disabled selected>Pilih rating</option>
                <option value="1">1 - Sangat Buruk</option>
                <option value="2">2 - Buruk</option>
                <option value="3">3 - Biasa Saja</option>
                <option value="4">4 - Baik</option>
                <option value="5">5 - Sangat Baik</option>
            </select>
        </div>
    </div>

        <div class="form-group2">
            <label for="review">Masukkan Review Anda</label>
            <textarea id="review" name="review" rows="4" placeholder="example Tempatnya bersih dan makanannya enak" required></textarea>
        </div>

        <button type="submit">Kirim</button>
    </form>
</section>

<section class="daftar-review">
    <h2>Daftar Review</h2>
    
    <div class="review-container2">

    <div class="user-review">
          
            <div class="judul">
              <h4>Jahfal Azzuhri S</h4>
              <p>19 -22 20012</p>
            </div>
            
            <section class="review">
            <p>Tempatnya bersih makanannya enak</p>
            </section>
            
    </div>
    <div class="user-review">
          
            <div class="judul">
              <h4>Yohan permana</h4>
              <p>19 -22 20012</p>
            </div>
            
            <section class="review">
            <p>Tempatnya bersih makanannya enak</p>
            </section>
            
    </div>
    <div class="user-review">
          
            <div class="judul">
              <h4>M nur Hikmal</h4>
              <p>19 -22 20012</p>
            </div>
            
            <section class="review">
            <p>Tempatnya bersih makanannya enak</p>
            </section>
            
    </div>
    
    </div>

</section>            
</div>



`;

export {
  daftarpopuler,
  daftartestimoni,
  allkuliner,
  searchkuliner,
  aboutplate,
  aboutmadura,
  detailplate,
};
