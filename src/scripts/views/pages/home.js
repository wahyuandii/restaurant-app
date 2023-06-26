import DataSource from '../../data/datasource';
import { restoItemTemplate } from '../templates/templatecreator';

const Home = {
  async render() {
    return `
        <div class="content">
            <h1>Explore Restoran</h1>
            <div id="restaurants" class="list"></div>
        </div>`;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    //   console.log(restos);
    const restaurantsAPI = await DataSource.restaurantList();

    if (!restaurantsAPI.error) {
      const restaurantContainer = document.querySelector('#restaurants');

      restaurantsAPI.restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += restoItemTemplate(restaurant);
      });
    }
  },
};

export default Home;
