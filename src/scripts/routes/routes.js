import Pagehome from '../views/pages/pagehome';
import Pagekuliner from '../views/pages/pagekuliner';
import Pagefavorit from '../views/pages/pagefavorit';
import Detail from '../views/pages/pagedetail';
import Pageabout from '../views/pages/pageabout';

const routes = {
  '/': Pagehome, // sebagai halaman utama/ default
  '/pagehome': Pagehome,
  '/pagekuliner': Pagekuliner,
  '/pagefavorit': Pagefavorit,
  '/pageabout': Pageabout,
  '/detail/:id': Detail,
};

export default routes;
