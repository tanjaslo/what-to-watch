import { useParams } from 'react-router';
import type { Film } from '../../types/film';
import type { Review } from '../../types/review';
import CatalogLikeThis from '../../components/catalog-like-this/catalog-like-this';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import NotFoundPage from '../not-found-page/not-found-page';
import PageContent from '../../components/containers/page-content/page-content';
import PageFooter from '../../components/page-footer/page-footer';

type MoviePageProps = {
  films: Film[];
  reviews: Review[];
};

function MoviePage({ films, reviews }: MoviePageProps): JSX.Element {
  const { id }: { id: string } = useParams();
  const currentFilm = films.find((film) => film.id === +id);

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

export default MoviePage;
