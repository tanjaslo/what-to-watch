import type { Film } from '../../../types/film';
import FilmRating from '../../rating/rating';

type FilmCardOverviewProps = {
  film: Film;
}

function FilmCardOverview({film}: FilmCardOverviewProps): JSX.Element {
  const {description, director, starring} = film;

  const actors = starring.join(', ');

  return (
    <>
      <FilmRating film={film} />
      <div className="film-card__text">
        {description}
        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring: {actors} and other</strong>
        </p>
      </div>
    </>);
}

export default FilmCardOverview;
