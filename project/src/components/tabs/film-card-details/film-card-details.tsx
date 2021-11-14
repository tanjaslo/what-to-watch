import { Fragment } from 'react';
import type { Film } from '../../../types/film';

type FilmCardDetailsProps = {
  film: Film;
}

function FilmCardDetails({film}: FilmCardDetailsProps): JSX.Element {
  const {genre, director, runTime, released, starring} = film;

  const formatedActorsList = (actors: string[]) =>
    actors.map((actor, i) => {
      const lastActor = i < actors.length - 1;
      return (
        <Fragment key={actor}>
          {actor}{lastActor && ','}<br />
        </Fragment>);
    });

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">{formatedActorsList(starring)}</span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmCardDetails;
