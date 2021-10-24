import { Film } from '../../types/film';

type FilmCardPosterProps = {
  film: Film;
  isMoviePage?: boolean;
}

function FilmCardPoster({film, isMoviePage = false}: FilmCardPosterProps):JSX.Element {
  const {name, posterImage} = film;

  return (
    <div
      className={`film-card__poster ${isMoviePage ?
        'film-card__poster--big' :
        'film-card__poster--small'}`}
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
