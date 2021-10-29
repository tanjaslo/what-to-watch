import { Film } from '../../types/film';

type FilmRatingProps = {
  film: Film;
}

function FilmRating({film}: FilmRatingProps): JSX.Element {
  return (
    <div className="film-rating">
      <div className="film-rating__score">{film.rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">Very good</span>
        <span className="film-rating__count">{film.rating} ratings</span>
      </p>
    </div>
  );
}

export default FilmRating;
