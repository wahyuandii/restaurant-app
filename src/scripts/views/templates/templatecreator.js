import CONFIG from '../../globals/config';

const restoDetailMenu = (items) => {
  let lists = '';
  items.forEach((item) => {
    lists += `<li>${item.name}</li>`;
  });
  return lists;
};

const restoDetailReview = (reviews) => {
  let reviewList = '';
  reviews.forEach((review) => {
    reviewList += `
          <div class="review_item">
              <p class="review_item_name">${review.name}</p>
              <p class="review_item_review">${review.review} - <span class="review_item_review_date">${review.date}</span></p>
          </div>`;
  });

  return reviewList;
};

const restoDetailTemplate = (resto) => `
<h1>${resto.name}</h1>
<div class="detail_resto">
    <img class="resto_img" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" alt="${resto.name}"/>
    <div class="resto_information">
        <h2>Information</h2>
        <h3>Address</h3>
        <p>${resto.address}, ${resto.city}</p>
        <h3>Rating</h3>
        <p>${resto.rating}</p>
    </div>
    <div class="resto_description">
        <h2>Description</h2>
        <p>${resto.description}</p>
    </div>
    <div class="resto_menu">
        <h2>Menu</h2>
        <h3>Foods</h3>
            <ul class="menu_list">
                ${restoDetailMenu(resto.menus.foods)}
            </ul>
        <h3>Drinks</h3>
            <ul class="menu_list">
                ${restoDetailMenu(resto.menus.drinks)}
            </ul>
    </div>
    <div class="resto_review">
        <h2>Review</h2>
        <div class="review_list">
            ${restoDetailReview(resto.customerReviews)}
        </div>
    </div>
</div>`;

const restoItemTemplate = (resto) => `
    <div class="list_item">

    <picture>
    <source type="image/webp" data-srcset="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId : 'https://picsum.photos/200/300?grayscale'}" media="all and (max-width: 600px)">
    <source type="image/jpeg" data-srcset="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId : 'https://picsum.photos/200/300?grayscale'}" media="all and (min-width: 601px)">
    <img class="lazyload list_item_img" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_LARGE + resto.pictureId : 'https://picsum.photos/200/300?grayscale'}" alt="${resto.name}">
    </picture>
      <div class="city">${resto.city}</div>
        <div class="list_item_detail">
            <p class="list_item_rating">⭐️${resto.rating}</p>
            <h2 class="list_item_title"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h2>
            <div class="list_item_description">${resto.description}...</div>
        </div>
      </div>`;

const createLikeRestoButtonTemplate = () => `
      <button aria-label="unlike this resto" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
      </button>`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>`;

export {
  restoItemTemplate,
  restoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
