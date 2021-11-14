import { useParams } from 'react-router';
import { Film } from '../../types/film';
import FilmsList from '../films-list/films-list';

type CatalogLikeThisProps = {
  films: Film[];
}

function CatalogLikeThis({films}: CatalogLikeThisProps): JSX.Element {
  const {id}: {id: string} = useParams();

  const currentFilm = films.find((film) => film.id === +id);
  const similarGenreFilms = films.filter((film) => (
    film !== currentFilm && film.genre === currentFilm?.genre
  ));

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={similarGenreFilms} />
    </section>
  );
}

export default CatalogLikeThis;
