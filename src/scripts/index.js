import 'regenerator-runtime';
import '../styles/home.scss';
import '../styles/kuliner.scss';
import '../styles/footer.scss';
import '../styles/about.scss';
import '../styles/detail.scss';
import '../styles/bookmark.scss';
import '../styles/artikel.scss';
// eslint-disable-next-line import/extensions
import App from './views/app';
import swRegister from './utils/sw-register';
// eslint-disable-next-line import/extensions
import './component/jumbotron.js';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#menuToggle'),
  drawer: document.querySelector('#drawer-navigasi'),
  content: document.querySelector('main'),
  skip: document.querySelector('#skip'),
});

const smoothScrollToElement = (hash) => {
  const id = hash.replace('#', '');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

window.addEventListener('hashchange', () => {
  app.renderPage();
  setTimeout(() => {
    smoothScrollToElement(window.location.hash);
  }, 100);
});

window.addEventListener('load', async () => {
  await app.renderPage();
  await swRegister();
  smoothScrollToElement(window.location.hash);
});
