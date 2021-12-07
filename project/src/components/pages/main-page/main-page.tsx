import type { Film } from '../../../types/film';
import Catalog from '../../catalog/catalog';
import FilmCardPromo from '../../film-card-promo/film-card-promo';
import PageContent from '../../containers/page-content/page-content';
import PageFooter from '../../page-footer/page-footer';

type MainPageProps = {
  films: Film[];
};

function MainPage({ films }: MainPageProps): JSX.Element {
  return (
    <>
      <FilmCardPromo films={films} />
      <PageContent>
        <Catalog />
        <PageFooter />
      </PageContent>
    </>
  );
}

export default MainPage;
