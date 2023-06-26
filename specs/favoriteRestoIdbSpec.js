const assert = require('assert');

Feature('Favorite Resto Idb Contract Test');

Scenario('saving a resto', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.list_item_title a');
  const firstResto = locate('.list_item_title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.list_item');
  const likedRestoTitle = await I.grabTextFrom('.list_item_title a');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
