import Catalog from '../../catalog/catalog';
import FilmCardPromo from '../../film-card-promo/film-card-promo';
import PageContent from '../../containers/page-content/page-content';
import PageFooter from '../../page-footer/page-footer';

function MainPage(): JSX.Element {
  return (
    <>
      <FilmCardPromo />
      <PageContent>
        <Catalog />
        <PageFooter />
      </PageContent>
    </>
  );
}

export default MainPage;
