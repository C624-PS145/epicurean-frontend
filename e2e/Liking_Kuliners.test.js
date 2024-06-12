/* eslint-disable no-undef */
Feature('Liking Kuliners');

Before(({ I }) => {
  I.amOnPage('/#/pagefavorit');
});

Scenario('showing empty liked kuliners', ({ I }) => {
  I.waitForElement('#wisata-list', 5); // Tunggu hingga elemen muncul, maksimum 5 detik
  I.seeElement('#wisata-list');
  I.see('Tidak ada wisata kuliner yang disukai.', '.kuliner-item_not_found');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada wisata kuliner yang disukai.', '.kuliner-item_not_found');
  I.amOnPage('/#/pagekuliner');

  I.waitForElement('.kuliner_title a', 10);
  I.seeElement('.kuliner_title a');
  const firstKuliner = locate('.kuliner_title a').first();
  I.click(firstKuliner);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/pagefavorite');
});
