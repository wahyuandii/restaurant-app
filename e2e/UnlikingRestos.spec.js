const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
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

  I.seeElement('.list_item_title');
  const likedListTitle = await I.grabTextFrom('.list_item_title');
  I.click(likedListTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('.resto_not_found');
});
