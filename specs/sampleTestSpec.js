// /* eslint-disable no-undef */
// import LikeButtonInitiator from '../src/scripts/utils/likebuttoninitiator';
// import FavoriteRestoIdb from '../src/scripts/data/favoriterestoidb';
// // const sum = (a, b) => a + b;

// describe('liking a resto', () => {
//   const addLikeButtonContainer = () => {
//     document.body.innerHTML = '<div id="likeButtonContainer"></div>';
//   };

//   it('should show the like button when the resto has not been liked before', async () => {
//     await LikeButtonInitiator.init({
//       likeButtonContainer: document.querySelector('#likeButtonContainer'),
//       resto: {
//         id: 1,
//       },
//     });

//     expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
//   });

//   beforeEach(() => {
//     addLikeButtonContainer();
//   });

//   it('should be able to like the resto', async () => {
//     await LikeButtonInitiator.init({
//       likeButtonContainer: document.querySelector('#likeButtonContainer'),
//       resto: {
//         id: 1,
//       },
//     });

// eslint-disable-next-line max-len
//     it('should not show the unlike button when the resto has not been liked before', async () => {
//       await LikeButtonInitiator.init({
//         likeButtonContainer: document.querySelector('#likeButtonContainer'),
//         resto: {
//           id: 1,
//         },
//       });

//       expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
//     });

//     document.querySelector('#likeButton').dispatchEvent(new Event('click'));
//     const resto = await FavoriteRestoIdb.getResto(1);

//     expect(resto).toEqual({ id: 1 });

//     FavoriteRestoIdb.deleteResto(1);
//   });

//   it('should not add a resto again when its already liked', async () => {
//     await LikeButtonInitiator.init({
//       likeButtonContainer: document.querySelector('#likeButtonContainer'),
//       resto: {
//         id: 1,
//       },
//     });

//     // Tambahkan resto dengan ID 1 ke daftar resto yang disukai
//     await FavoriteRestoIdb.putResto({ id: 1 });
//     // Simulasikan pengguna menekan tombol suka resto
//     document.querySelector('#likeButton').dispatchEvent(new Event('click'));
//     // tidak ada resto yang ganda
//     expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 1 }]);

//     FavoriteRestoIdb.deleteResto(1);
//   });

//   // menggunakan metode xit, bukan it
//   xit('should not add a resto when it has no id', async () => {
//     await LikeButtonInitiator.init({
//       likeButtonContainer: document.querySelector('#likeButtonContainer'),
//       resto: {},
//     });

//     document.querySelector('#likeButton').dispatchEvent(new Event('click'));

//     expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
//     // describe('A Sample Test for Sum', () => {
//     //   it('should return a + b value', () => {
//     //     expect(sum(2, 3))
//     //       .toEqual(5);
//   });
// });
