import PageFooter from '../../components/ui/page-footer/page-footer';
import CatalogLikeThis from '../../components/catalog-like-this/catalog-like-this';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import PageContent from '../../components/ui/page-content/page-content';

function FilmPage(): JSX.Element {
  return (
    <>
      <FilmCardFull />
      <PageContent>
        <CatalogLikeThis />
        <PageFooter />
      </PageContent>
    </>
  );
}

export default FilmPage;
