import { Film } from '../../types/film';
import { Review } from '../../types/review';
import FilmCardBg from '../film-card-bg/film-card-bg';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCardFullSection from '../containers/film-card-full-section/film-card-full-section';
import FilmCardPoster from '../film-card-poster/film-card-poster';
import Logo from '../logo/logo';
import PageHeader from '../containers/page-header/page-header';
import Tabs from '../tabs/tabs';
import UserBlock from '../user-block/user-block';

type FilmCardFullProps = {
  film: Film;
  reviews: Review[];
}

function FilmCardFull({film, reviews}: FilmCardFullProps): JSX.Element {
  const {name, genre, released} = film;

  return (
    <FilmCardFullSection>
      <div className="film-card__hero">
        <FilmCardBg film={film} />

        <h1 className="visually-hidden">WTW</h1>
        <PageHeader filmCardHead>
          <Logo />
          <UserBlock />
        </PageHeader>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>
            <FilmCardButtons />
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <FilmCardPoster film={film} big />
          <div className="film-card__desc">
            <Tabs film={film} reviews={reviews} />
          </div>
        </div>
      </div>
    </FilmCardFullSection>
  );
}

export default FilmCardFull;
