import Catalog from '../../components/catalog/catalog';
import FilmCardPromo from '../../components/film-card-promo/film-card-promo';
import PageContent from '../../components/containers/page-content/page-content';
import PageFooter from '../../components/page-footer/page-footer';

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
