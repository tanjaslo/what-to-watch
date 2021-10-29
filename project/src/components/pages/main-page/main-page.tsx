import type { Film } from '../../../types/film';
import Catalog from '../../catalog/catalog';
import FilmCardPromo from '../../film-card-promo/film-card-promo';
import Footer from '../../footer/footer';
import PageContent from '../../page-content/page-content';

type MainPageProps = {
  films: Film[];
}

function MainPage({films}: MainPageProps): JSX.Element {
  const mainFilmsList = films.slice(1, films.length);

  return (
    <>
      <FilmCardPromo films={films} />
      <PageContent>
        <Catalog films={mainFilmsList} isMainPage />
        <Footer />
      </PageContent>
    </>
  );
}

export default MainPage;
