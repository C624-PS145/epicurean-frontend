import CONFIG from './config';

const API_ENDPOINT = {

  POPULER: `${CONFIG.BASE_URL}populer`,
  GET_DETAIL_BYID: (id) => `${CONFIG.BASE_URL}detailwisatakuliner/${id}`,
};

export default API_ENDPOINT;
