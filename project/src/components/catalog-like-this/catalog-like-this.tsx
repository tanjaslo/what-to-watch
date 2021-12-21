import { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';
import { fetchSimilarFilms } from '../../store/api-actions';
import FilmsList from '../films-list/films-list';

const mapStateToProps = ({ similarFilms }: State) => ({
  similarFilms,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadSimilarFilms: (id: string) => {
    dispatch(fetchSimilarFilms(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function CatalogLikeThis({
  similarFilms,
  loadSimilarFilms,
}: PropsFromRedux): JSX.Element {
  const { id }: { id: string } = useParams();

  useEffect(() => {
    loadSimilarFilms(id);
  }, [loadSimilarFilms, id]);

  // const currentFilm = films.find((film) => film.id === id);
  const similarGenreFilms = similarFilms.filter((film) => film.id !== +id);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={similarGenreFilms} />
    </section>
  );
}

export { CatalogLikeThis };
export default connector(CatalogLikeThis);
