import CONFIG from './config';

const API_ENDPOINT = {

  POPULER: `${CONFIG.BASE_URL}populer`,
  GET_DETAIL_BYID: (id) => `${CONFIG.BASE_URL}detailwisatakuliner/${id}`,
  SEARCH_FILTER: (query, kabupaten) => {
    let url = `${CONFIG.BASE_URL}search?`;
    if (query) url += `nama_tempat=${query}`;
    if (kabupaten) url += `&kabupaten=${kabupaten}`;
    return url;
  },
};

export default API_ENDPOINT;
