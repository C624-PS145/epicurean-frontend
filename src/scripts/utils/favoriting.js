import FavoriteRestaurantIdb from '../data/indexdbfavorit';

const addFavorit = async (resterfav) => {
  const restfavor = await FavoriteRestaurantIdb.getallfavrest();

  if (resterfav.resterfav) {
    return {
      ...resterfav,
      resterfav: resterfav.resterfav.map((restaurant) => {
        const isfavorit = restfavor.some((rite) => rite.name === restaurant.name);
        return {
          ...restaurant,
          icon: isfavorit ? 'fa fa-bookmark' : 'fa fa-bookmark-o',
        };
      }),
    };
  }

  return resterfav;
};

export default addFavorit;
