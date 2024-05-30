import API_ENDPOINT from '../globals/endpoin';
import addFavorite from '../utils/favoriting';

class RestaurantApiSource {
  static async apikontenresto() {
    const response = await fetch(API_ENDPOINT.AMBIL_KONTEN_DAFTAR_RESTAURANT);
    const responseJson = await response.json();
    const responindexdb = await addFavorite(responseJson);
    return responindexdb.restaurants;
  }

  static async percobaan() {
    const response = await fetch(API_ENDPOINT.PERCOBAAN);
    const responseJson = await response.json();
    return responseJson;
  }

  static async apidetailpercobaan(id) {
    const response = await fetch(API_ENDPOINT.AMBIL_DETAIL_PERCOBAAN(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async apidetailresto(id) {
    const response = await fetch(API_ENDPOINT.AMBIL_DETAIL_RESTAURANT(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async apicariresto(query) {
    const response = await fetch(API_ENDPOINT.SEARCHRESTO(query));
    const responseJson = await response.json();
    const responindexdb = await addFavorite(responseJson);
    return responindexdb.restaurants;
  }

  static async apitambahreview(isi) {
    const response = await fetch(API_ENDPOINT.SENDREVIEW, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(isi),
    }); return response.json();
  }
}

export default RestaurantApiSource;
