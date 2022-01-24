import Catalog from '../../components/catalog/catalog';
import FilmCardPromo from '../../components/film-card-promo/film-card-promo';
import PageContent from '../../components/ui/page-content/page-content';
import PageFooter from '../../components/ui/page-footer/page-footer';

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
