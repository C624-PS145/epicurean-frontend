/* eslint-disable no-undef */
Feature('Review Wisata Kuliner');

Before(({ I }) => {
  // Buka halaman utama kuliner
  I.amOnPage('/#/pagekuliner');
});

Scenario('submit a review', async ({ I }) => {
  // Tunggu hingga daftar item kuliner terlihat
  I.waitForElement('.list-item', 10);

  // Klik tombol detail pada item pertama di daftar
  I.click(locate('.detail-button').first());

  // Tunggu hingga halaman detail terbuka dan form review terlihat
  I.waitForElement('.form-review-container', 10);

  // Pastikan elemen-elemen form terlihat
  I.seeElement('.form-review-container');

  // Isi form review
  I.fillField('#name', 'Yohan Permana');
  I.selectOption('#rating', '4 - Baik');
  I.fillField('#review', 'Tempatnya bersih dan makanannya enak');

  // Kirim form review
  I.click('button[type="submit"]');

  // Refresh halaman
  I.refreshPage();
});
