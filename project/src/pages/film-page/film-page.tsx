import { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';
import { fetchFilm, fetchReviews } from '../../store/api-actions';
import PageFooter from '../../components/page-footer/page-footer';
import CatalogLikeThis from '../../components/catalog-like-this/catalog-like-this';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import NotFoundPage from '../not-found-page/not-found-page';
import PageContent from '../../components/containers/page-content/page-content';

const mapStateToProps = ({ films, currentFilm, reviews }: State) => ({
  films,
  reviews,
  currentFilm,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadFilm: (id: string) => {
    dispatch(fetchFilm(id));
  },
  loadReviews: (id: string) => {
    dispatch(fetchReviews(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function FilmPage({
  films,
  currentFilm,
  reviews,
  loadFilm,
  loadReviews,
}: ConnectedComponentProps): JSX.Element {
  const { id }: { id: string } = useParams();

  useEffect(() => {
    loadFilm(id);
    loadReviews(id);
  }, [id]);

  if (currentFilm) {
    return (
      <>
        <FilmCardFull film={currentFilm} reviews={reviews} />
        <PageContent>
          <CatalogLikeThis films={films} />
          <PageFooter />
        </PageContent>
      </>
    );
  }
  return <NotFoundPage />;
}

export { FilmPage };
export default connector(FilmPage);
