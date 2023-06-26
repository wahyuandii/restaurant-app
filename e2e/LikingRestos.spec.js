/* eslint-disable codeceptjs/no-pause-in-scenario */
const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Tidak ada resto untuk ditampilkan', '.resto_not_found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto_not_found');

  I.amOnPage('#/favorite');

  pause();
  I.seeElement('.list_item_title a');

  const firstResto = locate('.list_item_title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.list_item');
  const likedRestoTitle = await I.grabTextFrom('.list_item_title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
