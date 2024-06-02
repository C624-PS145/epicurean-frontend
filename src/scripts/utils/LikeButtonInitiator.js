import { templatelikebutton, templateunlikebutton } from '../views/templates/template-creator';
import FavoriteWisataIdb from '../data/favoriteWisataIdb';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, wisata }) {
    this._likeButtonContainer = likeButtonContainer;
    this._wisata = wisata;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._wisata;

    if (await this._isWisataExist(id)) {
      this._renderUnlikeButton();
    } else {
      this._renderLikeButton();
    }
  },

  async _isWisataExist(id) {
    const wisata = await FavoriteWisataIdb.getfavrest(id);
    return !!wisata;
  },

  _renderLikeButton() {
    this._likeButtonContainer.innerHTML = templatelikebutton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteWisataIdb.putfavrest(this._wisata);
      this._renderButton();
    });
  },

  _renderUnlikeButton() {
    this._likeButtonContainer.innerHTML = templateunlikebutton();

    const unlikeButton = document.querySelector('#likeButton');
    unlikeButton.addEventListener('click', async () => {
      await FavoriteWisataIdb.deletefavrest(this._wisata.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
