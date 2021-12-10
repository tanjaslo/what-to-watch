import type { Film } from '../../types/film';
import FilmCardSmall from '../film-card-small/film-card-small';

type FilmsListProps = {
  films: Film[];
};

function FilmsList({ films }: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCardSmall key={film.id} {...{ film }} />
      ))}
    </div>
  );
}

export default FilmsList;
