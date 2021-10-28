import { Film } from '../../types/film';
import FilmCardBg from '../film-card-bg/film-card-bg';
import Logo from '../logo/logo';
import PageHeader from '../page-header/page-header';
import Promo from '../promo/promo';
import UserBlock from '../user-block/user-block';

type FilmCardPromoProps = {
  films: Film[];
}

function FilmCardPromo({films}: FilmCardPromoProps): JSX.Element {
  const [promoFilm] = films;

  return (
    <section className="film-card">
      <FilmCardBg film={promoFilm} />

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader filmCardHead>
        <Logo />
        <UserBlock />
      </PageHeader>

      <Promo promoFilm={promoFilm as Film}/>

    </section>
  );
}

export default FilmCardPromo;
