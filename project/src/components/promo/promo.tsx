import type { Film } from '../../types/film';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';

type PromoProps = {
  promoFilm: Film;
}

function Promo({promoFilm}: PromoProps): JSX.Element {
  const {name, posterImage, genre, released} = promoFilm;

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>
          <FilmCardButtons isPromo />
        </div>
      </div>
    </div>
  );
}

export default Promo;
