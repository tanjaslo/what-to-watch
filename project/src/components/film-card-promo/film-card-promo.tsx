import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import FilmCardBg from '../film-card-bg/film-card-bg';
import PageHeader from '../containers/page-header/page-header';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import { ThunkAppDispatch } from '../../types/action';
import { fetchPromoFilm } from '../../store/api-actions';
import { useEffect } from 'react';

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

  const { id, name, posterImage, genre, released, isFavorite } = promoFilm;

  if (!promoFilm) {
    return <PageHeader />;
  }

  return (
    <section className="film-card">
      <FilmCardBg film={promoFilm} />

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader filmCardHead />

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
            <FilmCardButtons id={id} isFavorite={isFavorite} />
          </div>
        </div>
      </div>
    </section>
  );
}

export { FilmCardPromo };
export default connector(FilmCardPromo);
