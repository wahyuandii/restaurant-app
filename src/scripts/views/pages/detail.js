import UrlParser from '../../routes/urlparser';
import DataSource from '../../data/datasource';
import { restoDetailTemplate } from '../templates/templatecreator';
import LikeButtonPresenter from '../../utils/likebuttonpresenter';
import FavoriteRestoIdb from '../../data/favoriterestoidb';

const Detail = {
  async render() {
    return `
          <div id="resto" class="resto"></div>
          <div id="likeButtonContainer"></div>`;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    //   console.log(restaurant);
    let detailRestaurant = await DataSource.detailRestaurant(url.id);
    detailRestaurant = detailRestaurant.restaurant;
    console.log(detailRestaurant);
    const restaurantContainer = document.querySelector('#resto');
    // const likeButtonContainer = document.querySelector('#likeButtonContainer');
    restaurantContainer.innerHTML = restoDetailTemplate(detailRestaurant);
    // likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        pictureId: detailRestaurant.pictureId,
        id: detailRestaurant.id,
        name: detailRestaurant.name,
        rating: detailRestaurant.rating,
        description: detailRestaurant.description,
        city: detailRestaurant.city,
      },
    });
  },
};

export default Detail;
