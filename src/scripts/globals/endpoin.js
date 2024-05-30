import CONFIG from './configure';
import CONFIG2 from './configure2';

const API_ENDPOINT = {
  AMBIL_KONTEN_DAFTAR_RESTAURANT: `${CONFIG.BASE_URL}list`,
  AMBIL_DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCHRESTO: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  SENDREVIEW: `${CONFIG.BASE_URL}review`,
  PERCOBAAN: `${CONFIG2.BASE_URL}restaurant`,
  AMBIL_DETAIL_PERCOBAAN: (id) => `${CONFIG2.BASE_URL}restaurant/${id}`,
};

export default API_ENDPOINT;
