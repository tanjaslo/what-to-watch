import { Film } from '../../types/film';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCardFullSection from '../film-card-full-section/film-card-full-section';
import FilmCardPoster from '../film-card-poster/film-card-poster';
import FilmNavList from '../film-nav-list/film-nav-list';
import Logo from '../logo/logo';
import PageHeader from '../page-header/page-header';
import UserBlock from '../user-block/user-block';

type FilmCardFullProps = {
  film: Film;
}

function FilmCardFull({film}: FilmCardFullProps): JSX.Element {
  const {name, backgroundImage, genre, released, description, rating, director, starring} = film;

  const actors = starring.join(', ');

  return (
    <FilmCardFullSection>
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

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
            <FilmNavList />

            <div className="film-rating">
              <div className="film-rating__score">{rating}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">Very good</span>
                <span className="film-rating__count">{rating} ratings</span>
              </p>
            </div>

            <div className="film-card__text">
              {description}
              <p className="film-card__director">
                <strong>Director: {director}</strong>
              </p>
              <p className="film-card__starring">
                <strong>Starring: {actors} and other</strong>
              </p>
            </div>

          </div>
        </div>
      </div>
    </FilmCardFullSection>
  );
}

export default FilmCardFull;