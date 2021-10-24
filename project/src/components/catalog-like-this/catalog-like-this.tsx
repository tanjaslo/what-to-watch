import { useParams } from 'react-router';
import { Film } from '../../types/film';
import FilmsList from '../films-list/films-list';

type CatalogLikeThisProps = {
  films: Film[];
}

const OTHER_FILMS_COUNT = 4;

function CatalogLikeThis({films}: CatalogLikeThisProps): JSX.Element {
  const {id}: {id: string} = useParams();
  const currentFilm = films.find((film) => film.id === +id);
  const otherFilms = films.filter((film) => film !== currentFilm).slice(0, OTHER_FILMS_COUNT);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={otherFilms} />
    </section>
  );
}

export default CatalogLikeThis;
