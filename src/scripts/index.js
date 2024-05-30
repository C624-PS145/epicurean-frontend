import 'regenerator-runtime';
import '../styles/home.scss';
import '../styles/kuliner.scss';
import '../styles/footer.scss';
import '../styles/about.scss';
import '../styles/detail.scss';
// eslint-disable-next-line import/extensions
import App from './views/app';
// import swRegister from './utils/sw-register';
// eslint-disable-next-line import/extensions
import './component/jumbotron.js';

const app = new App({
  button: document.querySelector('#menuToggle'),
  drawer: document.querySelector('#drawer-navigasi'),
  content: document.querySelector('main'),
  skip: document.querySelector('#skip'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  // await swRegister();
});
