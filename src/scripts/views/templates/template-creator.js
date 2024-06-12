import createStars from '../../utils/logikarating';
// import CONFIG from '../../globals/configure';
const { formatDistanceToNow } = require('date-fns');

const daftarpopuler = (populer) => `
<article>
  <img class="lazyload" src="${populer.gambar_katalog}" alt="gambar wisata kuliner">
  <p class="lok">${populer.kabupaten}</p>
  <h3 class="kuliner_title"><a href="#/detail/${populer.id}">${populer.nama_tempat}</a></h3>
  <p>${populer.jam_operasional} <span>${createStars(populer.rating_avg)}</span>${populer.rating_avg}</p>
  <section>
    <p>${populer.deskripsi}</p>
    <div>
      <button class="detail-button" data-id="${populer.id}">Detail<span><i class="gg-arrow-right"></i></span></button>
    </div> 
  </section> 
</article>`;

const daftarfavorit = (wisata) => `
<article>
  <div class="perbutonan">
    <button class="remove-button"><i class="gg-close-r"></i></button>
    <button class="detail-button" data-id="${wisata.id}"><i class="gg-arrow-top-right-r"></i></button>
  </div>
  <img class="lazyload" src="${wisata.gambar_katalog}" alt="gambar wisata kuliner">
  <h3 class="kuliner_title"><a href="#/detail/${wisata.id}">${wisata.nama_tempat}</a></h3>
  <p class="lok">${wisata.kabupaten}</p>
  <p>${wisata.jam_operasional} <span>${createStars(wisata.rating_avg)}</span></p>
  <section>
  <p>${wisata.deskripsi}</p>
  </section>
</article>`;

const daftartestimoni = (testimoni) => `
<article>
    <p class="tgltesti">${formatDistanceToNow(new Date(testimoni.tanggal), { addSuffix: true })}<p>
  <img class="lazyload" src="${testimoni.gambar_katalog}" alt="gambar wisata kuliner">
  <h3 class="kuliner_title"><a href="#/detail/${testimoni.wisata_kuliner_id}">${testimoni.nama_tempat}</a></h3>
  <p><span>${createStars(testimoni.rating)}</span></p>
  <section>
    <h4>${testimoni.nama_pengulas}</h4>
    <p>${testimoni.ulasan}</p>
  </section> 
</article>`;

const searchkuliner = () => `
  <form id="searchForm">
    <input type="text" id="namaTempat" placeholder="Cari nama tempat">
    <input type="text" id="kabupaten" placeholder="Kabupaten">
    <input type="number" id="avgRating" placeholder="Rating minimal" step="0.1" min="0" max="5">
    <input type="text" id="makanan" placeholder="Makanan">
    <button type="submit">Cari</button>
  </form>
`;
const allkuliner = (searchfilter) => `
  <article class="kuliner_item">
    <img class="lazyload" src="${searchfilter.gambar_katalog}">
    <p class="lok">${searchfilter.kabupaten}</p>
    <h3 class="kuliner_title"><a href="#/detail/${searchfilter.id}">${searchfilter.nama_tempat}</a></h3>
    <p>${searchfilter.jam_operasional} <span>${createStars(searchfilter.rating_avg)}</span>${searchfilter.rating_avg}</p>
    <section>
      <p>${searchfilter.deskripsi}</p>
      <div>
        <button class="detail-button" data-id="${searchfilter.id}">Detail<span><i class="gg-arrow-right"></i></span></button>
      </div>
    </section> 
  </article>
`;

const aboutmadura = `

<div class="label">
    <section>
        <h2 id="aboutmad">About Madura</h2>
    </section>
</div>
<article>
    <div>
    <section>
        <p>
        Madura, sebuah pulau yang memukau di lepas pantai Jawa Timur, terkenal dengan keanekaragaman budayanya dan panorama alam yang menakjubkan. Dengan pesona pantainya yang memikat, tradisi yang kaya, dan keramahan penduduknya, Madura menjadi destinasi yang tak boleh dilewatkan bagi para penikmat wisata dan kuliner.

         Temukan lebih banyak tentang keindahan dan keunikan pulau Madura melalui artikel-artikel informatif
        </p>
        <div>
            <div class="writer">
            <p>Writer</p>
            <h3>Tim Epicurean</h3>
            </div>
            <p>Klik <button id="bartic">Disini</button>  untuk Akses zona informasi wisata seputar madura </p>
        </div>
    </section>
    <figure>
        <img class="lazyload" src="./images/bannermadura.jpg" alt="gambar madura">
    </figure>
    </div>
</article>`;

const aboutplate = `

<div class="developer">

    <h2>Developer.</h2>

    <div class="developer-container">

        <div class="agtdev">
            <img class="lazyload" src="https://media.licdn.com/dms/image/D5603AQGMWo0zwQWcVA/profile-displayphoto-shrink_800_800/0/1716131386812?e=1723075200&v=beta&t=iRGUoKpb8y539Puobli83XA386qdHXLxgpO_C0CtgBY" alt="Profil Yohan Permana">
            <h3>Yohan Permana</h3>
            <p>Fullstack Web Dev & Project lead</p>
            
            <section class="github">
                <img class="lazyload" src="./images/logogithub.png" alt="Github">
                <p>YohanpermanaRepository</p>
            </section>
        </div>

        <div  class="agtdev">
            <img class="lazyload" src="https://media.licdn.com/dms/image/D4D03AQHcYzAiTKlb7w/profile-displayphoto-shrink_800_800/0/1699278430134?e=1723075200&v=beta&t=RR71DAbAMVhPJqn8kXZ7Wr6HCZDaoXU-qyvaXsBvgf8" alt="Profil Jahfal Azzuhri Subroto">
            <h3>Jahfal Azzuhri S</h3>
            <p>Front-End Web Dev</p>
            
            <section class="github">
            <img src="./images/logogithub.png" alt="Github">
                <p>jahfal1987</p>
            </section>
        </div>

        <div  class="agtdev">
            <img class="lazyload" src="https://media.licdn.com/dms/image/D4E03AQGsiVRz6JQBQQ/profile-displayphoto-shrink_800_800/0/1676932052722?e=1723075200&v=beta&t=qWyhKtrxxd_MRaCORUi39D10AIZcJMATvffq5pWrUz0" alt="Profil M Nur Hikmal A">
            <h3>M Nur Hikmal A</h3>
            <p>Back End Web Dev</p>

            <section class="github">
            <img src="./images/logogithub.png" alt="Github">
                <p>HikmalRepository</p>
            </section>
        </div>
    </div> 
</div>


<div id="visimisi" class="visi-misi">
    <h2>Visi Misi</h2>
    <div class="visi-misi-container">
        <div class="visi">
            <h3>Visi</h3>
            <ul>
                <li>
                Menjadi pusat informasi terdepan yang mempromosikan keunikan kuliner Madura serta mendukung perkembangan UMKM lokal, dengan tujuan menjadikan Madura sebagai destinasi wisata kuliner utama yang mendunia.
                </li>
            </ul>
        </div>
        <div class="misi">
            <h3>Misi</h3>
            <ul>
                <li>Memperkenalkan dan mempromosikan wisata kuliner khas Madura kepada wisatawan domestik dan internasional.</li>
                <li>Menyajikan informasi lengkap dan akurat mengenai tempat-tempat kuliner terbaik di Madura.</li>
                <li>Menciptakan konten yang menarik dan informatif, termasuk ulasan, rekomendasi</li>
            </ul>
        </div>
    </div>
</div>`;

const detailplate = (detail) => `

<div class="informasi">

<section class="informasidangambar">

    <div class="detailgambar-kontainer">
      <img class="lazyload" src="${detail.gambar_katalog}" alt="gambar wisata kuliner">
    </div>

    <div>
        <h2 class="judula">${detail.nama_tempat}</h2>
        <p> Rating<span class="bintang">${createStars(detail.rating_avg)}</span>(${detail.rating_avg})</p>
        <p>${detail.alamat} </p>
        <p>Kabupaten : <span> ${detail.kabupaten} </span></p>
        <div class="deskripsi">
        <p>${detail.deskripsi}</p>
        </div>
        <section class="pemesanan">
            <p>informasi pemesanan (Whatsapp)</p>
            <a href="https://api.whatsapp.com/send?phone=62${detail.link_wa}">
            <img class="lazyload" src="../images/logowhatsapp.png" alt="WhatsApp">
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
        <li><img class="lazyload" src="${detail.galeri1}" alt="galeri1"></li>
        <li><img class="lazyload" src="${detail.galeri2}" alt="galeri2"></li>
        <li><img class="lazyload" src="${detail.galeri3}" alt="galeri3"></li>
        <li><img class="lazyload" src="${detail.galeri4}" alt="galeri4"></li>
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
                <p><span>${createStars(review.rating)}</span></p>
            </div>
            <section class="review">
                <p>${review.ulasan}</p>
            </section>
        </div>`).join('')}
    </div>

</section>            
</div>`;

const templatelikebutton = () => `
  <button aria-label="suka restoran" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const templateunlikebutton = () => `
  <button aria-label="batal suka restoran" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createArtikelTemplate = (artikel) => `
<article class="artikel-item">
  <h3>${artikel.judul}</h3>
  <img class="lazyload" src="${artikel.gambar_artikel}" alt="${artikel.judul}">
  <div class="artikel-details">
    <p class="auth"><strong>Published by:</strong> ${artikel.penulis}</p>
    <p><strong>Description:</strong> ${artikel.deskripsi}</p>
    <p><strong>Content:</strong> ${artikel.isi}</p>
  </div>
</article>`;

export {
  daftarpopuler,
  daftartestimoni,
  allkuliner,
  searchkuliner,
  aboutplate,
  aboutmadura,
  detailplate,
  templatelikebutton,
  templateunlikebutton,
  daftarfavorit,
  createArtikelTemplate,
};
