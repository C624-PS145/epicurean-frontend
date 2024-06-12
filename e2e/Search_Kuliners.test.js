/* eslint-disable no-undef */
const assert = require('assert');

Feature('searchwisatakuliner');

Before(({ I }) => {
  I.amOnPage('/#/pagekuliner');
});

Scenario('search by nama tempat', async ({ I }) => {
  I.fillField('#namaTempat', 'Kuliner Enak');
  I.click('#searchForm button[type="submit"]');
  I.waitForElement('.list-item', 5);
  I.seeElement('.list-item');
  const itemCount = await I.grabNumberOfVisibleElements('.list-item');
  I.say(`Number of visible items: ${itemCount}`);
  assert(itemCount > 0);
});

Scenario('search by kabupaten', async ({ I }) => {
  I.fillField('#kabupaten', 'Madura');
  I.click('#searchForm button[type="submit"]');
  I.waitForElement('.list-item', 5);
  I.seeElement('.list-item');
  const itemCount = await I.grabNumberOfVisibleElements('.list-item');
  I.say(`Number of visible items: ${itemCount}`);
  assert(itemCount > 0);
});

Scenario('search by minimal rating', async ({ I }) => {
  I.fillField('#avgRating', '4');
  I.click('#searchForm button[type="submit"]');
  I.waitForElement('.list-item', 5);
  I.seeElement('.list-item');
  const itemCount = await I.grabNumberOfVisibleElements('.list-item');
  I.say(`Number of visible items: ${itemCount}`);
  assert(itemCount > 0);
});

Scenario('search by makanan', async ({ I }) => {
  I.fillField('#makanan', 'Sate');
  I.click('#searchForm button[type="submit"]');
  I.waitForElement('.list-item', 5);
  I.seeElement('.list-item');
  const itemCount = await I.grabNumberOfVisibleElements('.list-item');
  I.say(`Number of visible items: ${itemCount}`);
  assert(itemCount > 0);
});
