import LikeButtonPresenter from '../../src/scripts/utils/likebuttonpresenter';
import FavoriteRestoIdb from '../../src/scripts/data/favoriterestoidb';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestos: FavoriteRestoIdb,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
