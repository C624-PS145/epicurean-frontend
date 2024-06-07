import CONFIG from './config';

const API_ENDPOINT = {

  ARTIKEL: `${CONFIG.BASE_URL}artikel`,
  ALL_ARTIKEL: `${CONFIG.BASE_URL}artikel`,

  LIST_ALL: `${CONFIG.BASE_URL}listallwisatakuliner`,
  POPULER: `${CONFIG.BASE_URL}populer`,
  BEST_REVIEW: `${CONFIG.BASE_URL}bestreview`,
  GET_DETAIL_BYID: (id) => `${CONFIG.BASE_URL}detailwisatakuliner/${id}`,
  SEARCH_FILTER: (query, kabupaten) => {
    let url = `${CONFIG.BASE_URL}search?`;
    if (query) url += `nama_tempat=${query}`;
    if (kabupaten) url += `&kabupaten=${kabupaten}`;
    return url;
  },
  CREATE_REVIEW: (id) => `${CONFIG.BASE_URL}detailwisatakuliner/${id}/ulasan`,
};

export default API_ENDPOINT;
