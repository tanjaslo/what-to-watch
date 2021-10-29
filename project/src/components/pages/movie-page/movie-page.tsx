import { useParams } from 'react-router';
import { Film } from '../../../types/film';
import CatalogLikeThis from '../../catalog-like-this/catalog-like-this';
import FilmCardFull from '../../film-card-full/film-card-full';
import NotFoundPage from '../not-found-page/not-found-page';
import PageContent from '../../page-content/page-content';
import PageFooter from '../../page-footer/page-footer';

type MoviePageProps = {
  films: Film[];
}

function MoviePage({films}: MoviePageProps): JSX.Element {
  const {id}: {id: string} = useParams();
  const currentFilm = films.find((film) => film.id === +id);

  if (currentFilm) {
    return (
      <>
        <FilmCardFull film={currentFilm} />
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
