import classNames from 'classnames';
import { Film } from '../../types/film';

type FilmCardPosterProps = {
  film: Film;
  small?: boolean;
  big?: boolean;
}

const INITIAL_CLASS = 'film-card__poster';

function FilmCardPoster({film, small, big}: FilmCardPosterProps): JSX.Element {
  const {name, posterImage} = film;

  const fullClassName = classNames(
    INITIAL_CLASS,
    {[`${INITIAL_CLASS}--small`]: small,
      [`${INITIAL_CLASS}--big`]: big,
    },
  );

  return (
    <div
      className={fullClassName}
    >
      <img
        src={posterImage}
        alt={`${name} poster`}
        width="218" height="327"
      />
    </div>
  );
}

export default FilmCardPoster;
