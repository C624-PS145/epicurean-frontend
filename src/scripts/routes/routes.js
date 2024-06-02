import Pagehome from '../views/pages/pagehome';
import Pagekuliner from '../views/pages/pagekuliner';
import Pagefavorit from '../views/pages/pagefavorit';
import Detail from '../views/pages/pagedetail';

const routes = {
  '/': Pagehome, // sebagai halaman utama/ default
  '/pagehome': Pagehome,
  '/pagekuliner': Pagekuliner,
  '/pagefavorit': Pagefavorit,
  '/detail/:id': Detail,
};

export default routes;
