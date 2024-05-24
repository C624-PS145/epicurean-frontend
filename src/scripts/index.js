import 'regenerator-runtime';
import '../styles/home.scss';
// eslint-disable-next-line import/extensions
import App from './views/app';
// import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menuToggle'),
  drawer: document.querySelector('#drawer-navigasi'),
  content: document.querySelector('main'),
  skip: document.querySelector('#skip'),
  mainkonten: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  // await swRegister();
});
