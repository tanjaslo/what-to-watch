import { useEffect } from 'react';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';
import { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';
import { fetchPromoFilm } from '../../store/api-actions';
import FilmCardBg from '../film-card-bg/film-card-bg';
import PageHeader from '../containers/page-header/page-header';
import Promo from '../promo/promo';

const mapStateToProps = ({ promoFilm }: State) => ({
  promoFilm,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadPromoFilm: () => {
    dispatch(fetchPromoFilm());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FilmCardPromo({
  promoFilm,
  loadPromoFilm,
}: PropsFromRedux): JSX.Element {
  useEffect(() => {
    loadPromoFilm();
  }, [loadPromoFilm]);

  if (!promoFilm) {
    return <PageHeader />;
  }

  return (
    <section className="film-card">
      <FilmCardBg film={promoFilm} />

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader filmCardHead />

      <Promo promoFilm={promoFilm} />
    </section>
  );
}

export { FilmCardPromo };
export default connector(FilmCardPromo);
