// eslint-disable-next-line no-unused-vars
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/swregister';
import App from './views/app';

// console.log('Hello Coders! :)');
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#content'),
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
