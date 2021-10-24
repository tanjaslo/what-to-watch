import { useParams } from 'react-router';
import { Film } from '../../../types/film';
import CatalogLikeThis from '../../catalog-like-this/catalog-like-this';
import Footer from '../../footer/footer';
import FullFilmCard from '../../full-film-card/full-film-card';
import PageContent from '../../page-content/page-content';
import NotFoundPage from '../not-found-page/not-found-page';

type MoviePageProps = {
  films: Film[];
}

function MoviePage({films}: MoviePageProps): JSX.Element {
  const {id}: {id: string} = useParams();
  const currentFilm = films.find((film) => film.id === +id);

  if (currentFilm) {
    return (
      <>
        <FullFilmCard film={currentFilm} />
        <PageContent>
          <CatalogLikeThis films={films} />
          <Footer />
        </PageContent>
      </>
    );
  }
  return <NotFoundPage />;
}

export default MoviePage;
