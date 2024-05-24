import Inisiatordrawer from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, skip,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._skip = skip;

    this.inisialsell();
  }

  inisialsell() {
    Inisiatordrawer.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      skip: this._skip,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
