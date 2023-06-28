import FavoriteRestoIdb from '../src/scripts/data/favoriterestoidb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    const unlikeButton = document.querySelector('[aria-label="unlike this resto"]');
    if (unlikeButton !== null) {
      unlikeButton.dispatchEvent(new Event('click'));
    }

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);

    const unlikeButton = document.querySelector('[aria-label="unlike this resto"]');
    if (unlikeButton !== null) {
      unlikeButton.dispatchEvent(new Event('click'));
    }

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
