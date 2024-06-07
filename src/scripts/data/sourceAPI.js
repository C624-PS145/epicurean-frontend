import API_ENDPOINT from '../globals/endpoint';

class EpicureanApiSource {
  static async wisatakulinerall() {
    const response = await fetch(API_ENDPOINT.LIST_ALL);
    const responseJson = await response.json();
    return responseJson;
  }

  static async wisatakulinerpopuler() {
    const response = await fetch(API_ENDPOINT.POPULER);
    const responseJson = await response.json();
    return responseJson;
  }

  static async reviewterbarudanterbaik() {
    const response = await fetch(API_ENDPOINT.BEST_REVIEW);
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

  static async createReview(id, reviewData) {
    const response = await fetch(API_ENDPOINT.CREATE_REVIEW(id), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseJson = await response.json();
    return responseJson;
  }

  static async createArtikel(formData) {
    try {
      const response = await fetch(API_ENDPOINT.ARTIKEL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }

  static async listAllArtikel() {
    try {
      const response = await fetch(API_ENDPOINT.ALL_ARTIKEL);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }
}

export default EpicureanApiSource;
