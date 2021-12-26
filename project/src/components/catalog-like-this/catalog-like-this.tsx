import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getSimilarFilms } from '../../store/films/selectors';
import { fetchSimilarFilms } from '../../store/api-actions';
import FilmsList from '../films-list/films-list';

function CatalogLikeThis(): JSX.Element {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();
  const similarFilms = useSelector(getSimilarFilms);
  const similarFilmsFiltered = similarFilms.filter((film) => film.id !== +id);

  useEffect(() => {
    dispatch(fetchSimilarFilms(id));
  }, [dispatch, id]);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmsList films={similarFilmsFiltered} />
    </section>
  );
}

export default CatalogLikeThis;
