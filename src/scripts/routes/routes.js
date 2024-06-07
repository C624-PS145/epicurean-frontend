import Pagehome from '../views/pages/pagehome';
import Pagekuliner from '../views/pages/pagekuliner';
import Pagefavorit from '../views/pages/pagefavorit';
import Detail from '../views/pages/pagedetail';
import Pageabout from '../views/pages/pageabout';
import Pageartikel from '../views/pages/pageartikel';

const routes = {
  '/': Pagehome, // sebagai halaman utama/ default
  '/pagehome': Pagehome,
  '/pagekuliner': Pagekuliner,
  '/pagefavorit': Pagefavorit,
  '/pageabout': Pageabout,
  '/detail/:id': Detail,
  '/pageartikel': Pageartikel,
};

export default routes;
