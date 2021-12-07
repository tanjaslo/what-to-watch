import { State } from '../../types/state';
import { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';
import FilmCardBg from '../film-card-bg/film-card-bg';
import Logo from '../logo/logo';
import PageHeader from '../containers/page-header/page-header';
import Promo from '../promo/promo';
import UserBlock from '../user-block/user-block';

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToProps = ({ promoFilm }: State) => ({
  promoFilm,
});

const connector = connect(mapStateToProps);

function FilmCardPromo({ promoFilm }: PropsFromRedux): JSX.Element {
  return (
    <section className="film-card">
      <FilmCardBg film={promoFilm} />

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader filmCardHead>
        <Logo />
        <UserBlock />
      </PageHeader>

      <Promo promoFilm={promoFilm} />
    </section>
  );
}

export { FilmCardPromo };
export default connector(FilmCardPromo);
