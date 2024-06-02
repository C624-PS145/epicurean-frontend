// import CONFIG from '../../globals/configure';
const { formatDistanceToNow } = require('date-fns');

export const createStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  let stars = '★'.repeat(fullStars);
  if (halfStars) {
    stars += '<span class="half-star">★</span>';
  }
  stars += '☆'.repeat(emptyStars);

  return stars;
};

const daftarpopuler = (populer) => `
<article>
  <img src="${populer.gambar_katalog}" alt="gambar wisata kuliner">
  <p class="lok">${populer.kabupaten}</p>
  <h3><a href="#/detail/${populer.id}">${populer.nama_tempat}</a></h3>
  <p>${populer.jam_operasional} <span>${createStars(populer.rating_avg)}</span</p>
  
  <section>
  <p>${populer.deskripsi}</p>
  <div>
    <button>
    <a href="#/detail/${populer.id}">  Detail<span>→</span></a>
    </button>
  </div>
</section> 
</article>`;

const daftartestimoni = (testimoni) => `
<article>
    <p class="tgltesti">${formatDistanceToNow(new Date(testimoni.tanggal), { addSuffix: true })}<p>
  <img src="${testimoni.gambar_katalog}" alt="gambar wisata kuliner">
  <h3><a href="#/detail/${testimoni.wisata_kuliner_id}">${testimoni.nama_tempat}</a></h3>
  <p><span>${createStars(testimoni.rating)}</span></p>
  <section>
    <h4>${testimoni.nama_pengulas}</h4>
    <p>${testimoni.ulasan}</p>
    
  </section> 
</article>`;

const searchkuliner = () => `
  <form id="searchForm">
  <input type="text" id="namaTempat" name="namaTempat" placeholder="Search wisata kuliner">
    <div>
    <select id="kabupaten" name="kabupaten">
    <option value="">No Filter</option>
    <option value="Bangkalan">Bangkalan</option>
    <option value="Sampang">Sampang</option>
    <option value="Sumenep">Sumenep</option>
    <option value="Pamekasan">Pamekasan</option>
    </select>
    <button type="submit">⌕</button>
    </div>
  </form>
`;

const allkuliner = (searchfilter) => `
  <article>
    <img src="${searchfilter.gambar_katalog}">
    <p class="lok">${searchfilter.kabupaten}</p>
    <h3><a href="#/detail/${searchfilter.id}">${searchfilter.nama_tempat}</a></h3>
    <p>${searchfilter.jam_operasional} <span>${createStars(searchfilter.rating_avg)}</span>${searchfilter.rating_avg}</p>
    <section>
      <p>${searchfilter.deskripsi}</p>
      <div>
        <button>
          <a href="#/detail/${searchfilter.id}">Detail<span>→</span></a>
        </button>
      </div>
    </section> 
  </article>
`;

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
      <img src="${detail.gambar_katalog}" alt="gambar wisata kuliner">
    </div>

    <div>
        <h2 class="judula">${detail.nama_tempat}</h2>
        <p>Rating (${detail.rating_avg})</p>
        <p> <span class="bintang">${createStars(detail.rating_avg)}</span></p>
        <p>${detail.alamat} </p>
        <p>Kabupaten : <span> ${detail.kabupaten} </span></p>
        <div class="deskripsi">
        <p>${detail.deskripsi}</p>
        </div>
        <section class="pemesanan">
            <p>informasi pemesanan (Whatsapp)</p>
            <a href="https://api.whatsapp.com/send?phone=62${detail.link_wa}">
            <img src="../images/whatsapp.png" alt="WhatsApp">
            </a>
            <p>Jam operasional : ${detail.jam_operasional}</p>
            <p>Lokasi Google Maps :</p>
            <iframe src="${detail.link_maps}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
          <ul>${detail.drinks.map((drink) => `<li tabindex="0">${drink.nama_minuman} <span> - Rp ${drink.harga} </span></li>`).join('')}</ul>         
      </div>
    </div>

</section>

<section class="fasilitas">
<h2>Fasilitas</h2>
    <ul>
        <li>${detail.fasilitas}</li>
    </ul>
</section>

<section class="galeri">
<h2>Galeri</h2>
    <ul>
        <li><img src="${detail.galeri1}" alt="galeri1"></li>
        <li><img src="${detail.galeri2}" alt="galeri2"></li>
        <li><img src="${detail.galeri3}" alt="galeri3"></li>
        <li><img src="${detail.galeri4}" alt="galeri4"></li>
    </ul>
</section>

<section class="form-review">
    <h2>Form Review</h2>
    <form class="form-review-container" action="#" method="post">
    <div class="nama-rating">
        <div class="form-group">
            <label for="name">Masukkan Nama</label>
            <input type="text" id="name" name="name" placeholder="example Yohan Permana" maxlength="20" required>
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

    ${detail.reviews.map((review) => `
        <div class="user-review">
            <div class="judul">
                <h4>${review.nama_pengulas}</h4>
                <p>${formatDistanceToNow(new Date(review.tanggal))}</p>
                <p>${review.rating}</p>
            </div>
            <section class="review">
                <p>${review.ulasan}</p>
            </section>
        </div>`).join('')}
    </div>

</section>            
</div>`;

export {
  daftarpopuler,
  daftartestimoni,
  allkuliner,
  searchkuliner,
  aboutplate,
  aboutmadura,
  detailplate,
};
