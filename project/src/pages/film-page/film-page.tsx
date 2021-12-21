import PageFooter from '../../components/page-footer/page-footer';
import CatalogLikeThis from '../../components/catalog-like-this/catalog-like-this';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import PageContent from '../../components/containers/page-content/page-content';

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
