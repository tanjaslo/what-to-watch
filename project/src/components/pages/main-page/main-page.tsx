import type { Film } from '../../../types/film';
import Catalog from '../../catalog/catalog';
import FilmCardPromo from '../../film-card-promo/film-card-promo';
import Footer from '../../footer/footer';
import PageContent from '../../page-content/page-content';

type MainPageProps = {
  films: Film[];
}

function MainPage({films}: MainPageProps): JSX.Element {
  return (
    <>
      <FilmCardPromo films={films} />
      <PageContent>
        <Catalog films={films} />
        <Footer />
      </PageContent>
    </>
  );
}

export default MainPage;
