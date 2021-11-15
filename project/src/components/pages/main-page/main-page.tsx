import type { Film } from '../../../types/film';
import Catalog from '../../catalog/catalog';
import FilmCardPromo from '../../film-card-promo/film-card-promo';
import PageContent from '../../containers/page-content/page-content';
import PageFooter from '../../page-footer/page-footer';

type MainPageProps = {
  films: Film[];
}

function MainPage({films}: MainPageProps): JSX.Element {
  const mainFilmsList = films.slice(1, films.length);

  return (
    <>
      <FilmCardPromo films={films} />
      <PageContent>
        <Catalog films={mainFilmsList} />
        <PageFooter />
      </PageContent>
    </>
  );
}

export default MainPage;
