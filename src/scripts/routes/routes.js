import Pagehome from '../views/pages/pagehome';
import Pagekuliner from '../views/pages/pagekuliner';
import Pageabout from '../views/pages/pageabout';
import Detail from '../views/pages/pagedetail';

const routes = {
  '/': Pagehome, // sebagai halaman utama/ default
  '/pagehome': Pagehome,
  '/pagekuliner': Pagekuliner,
  '/pageabout': Pageabout,
  '/detail/:id': Detail,
};

export default routes;
