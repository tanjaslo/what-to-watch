import { useParams } from 'react-router';
import { Film } from '../../../types/film';
import CatalogLikeThis from '../../catalog-like-this/catalog-like-this';
import FilmCardPoster from '../../film-card-poster/film-card-poster';
import Footer from '../../footer/footer';
import Logo from '../../logo/logo';
import NotFoundPage from '../not-found-page/not-found-page';

type MoviePageProps = {
  films: Film[];
}

function MoviePage({films}: MoviePageProps): JSX.Element {
  const {id}: {id: string} = useParams();
  const currentFilm = films.find((film) => film.id === +id);

  if (currentFilm) {
    const {name, backgroundImage, genre, released, description, rating, director, starring} = currentFilm;

    const actors = starring.join(', ');

    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={backgroundImage} alt={name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">

              <Logo />

              <ul className="user-block">
                <li className="user-block__item">
                  <div className="user-block__avatar">
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </div>
                </li>
                <li className="user-block__item">
                  <a href="/" className="user-block__link">Sign out</a>
                </li>
              </ul>
            </header>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{genre}</span>
                  <span className="film-card__year">{released}</span>
                </p>

                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn film-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">

              <FilmCardPoster film={currentFilm} isMoviePage />

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className="film-nav__item film-nav__item--active">
                      <a href="/" className="film-nav__link">Overview</a>
                    </li>
                    <li className="film-nav__item">
                      <a href="/" className="film-nav__link">Details</a>
                    </li>
                    <li className="film-nav__item">
                      <a href="/" className="film-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>

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
        </section>

        <div className="page-content">

          <CatalogLikeThis films={films} />
          <Footer />

        </div>
      </>
    );
  }
  return <NotFoundPage />;
}

export default MoviePage;
