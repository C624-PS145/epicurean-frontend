import { openDB } from 'idb';
import CONFIG from '../globals/configure';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;
const promised = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});
const indexdbfavrest = {
  async getfavrest(id) {
    return (await promised).get(OBJECT_STORE_NAME, id);
  },
  async getallfavrest() {
    return (await promised).getAll(OBJECT_STORE_NAME);
  },
  async putfavrest(restaurant) {
    return (await promised).put(OBJECT_STORE_NAME, restaurant);
  },
  async deletefavrest(id) {
    return (await promised).delete(OBJECT_STORE_NAME, id);
  },
};
export default indexdbfavrest;
