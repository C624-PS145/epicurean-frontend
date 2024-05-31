import CONFIG from './config';

const API_ENDPOINT = {

  POPULER: `${CONFIG.BASE_URL}populer`,
  GET_DETAIL_BYID: (id) => `${CONFIG.BASE_URL}detailwisatakuliner/${id}`,
  SEARCH_FILTER: (query, kabupaten) => `${CONFIG.BASE_URL}search?q=${query}&kabupaten=${kabupaten}`,
};

export default API_ENDPOINT;
