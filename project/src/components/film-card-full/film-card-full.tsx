import { useParams } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import FilmCardBg from '../film-card-bg/film-card-bg';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import FilmCardFullSection from '../containers/film-card-full-section/film-card-full-section';
import FilmCardPoster from '../film-card-poster/film-card-poster';
import PageHeader from '../containers/page-header/page-header';
import Tabs from '../tabs/tabs';
import { fetchFilm } from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { useEffect } from 'react';

const mapStateToProps = ({ currentFilm }: State) => ({
  currentFilm,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadFilm: (id: string) => {
    dispatch(fetchFilm(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FilmCardFull({ currentFilm, loadFilm }: PropsFromRedux): JSX.Element {
  const { id }: { id: string } = useParams();
  const { name, genre, released, isFavorite } = currentFilm;

  useEffect(() => {
    loadFilm(id);
  }, [loadFilm, id]);

  return (
    <FilmCardFullSection>
      <div className="film-card__hero">
        <FilmCardBg film={currentFilm} />

        <h1 className="visually-hidden">WTW</h1>
        <PageHeader filmCardHead />

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>
            <FilmCardButtons id={id} isFavorite={isFavorite} hasAddReviewLink />
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <FilmCardPoster film={currentFilm} big />
          <div className="film-card__desc">
            <Tabs film={currentFilm} />
          </div>
        </div>
      </div>
    </FilmCardFullSection>
  );
}

export { FilmCardFull };
export default connector(FilmCardFull);
