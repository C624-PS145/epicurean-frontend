import API_ENDPOINT from '../globals/endpoint';

class EpicureanApiSource {
  static async wisatakulinerpopuler() {
    const response = await fetch(API_ENDPOINT.POPULER);
    const responseJson = await response.json();
    return responseJson;
  }

  static async wisatakulinerid(id) {
    const response = await fetch(API_ENDPOINT.GET_DETAIL_BYID(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async searchkuliner(query, kabupaten) {
    const response = await fetch(API_ENDPOINT.SEARCH_FILTER(query, kabupaten));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default EpicureanApiSource;
