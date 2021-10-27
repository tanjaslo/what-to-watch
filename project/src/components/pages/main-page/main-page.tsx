import type { Film } from '../../../types/film';
import Catalog from '../../catalog/catalog';
import Footer from '../../footer/footer';
import Logo from '../../logo/logo';
import Promo from '../../promo/promo';

type MainPageProps = {
  films: Film[];
}

function MainPage({films}: MainPageProps): JSX.Element {
  const [promoFilm] = films;

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
              <a className="user-block__link" href="/">Sign out</a>
            </li>
          </ul>
        </header>

        <Promo promoFilm={promoFilm as Film}/>

      </section>

      <div className="page-content">
        <Catalog films={films} />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
