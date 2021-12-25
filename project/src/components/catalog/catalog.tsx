import { useSelector, useDispatch } from 'react-redux';
import { changeGenre, resetStepCount } from '../../store/action';
import { getActiveGenre, getStepCount } from '../../store/app/selectors';
import { getFilms } from '../../store/films/selectors';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import CatalogSection from '../containers/catalog-section/catalog-section';
import ShowMore from '../show-more/show-more';
import { getFilteredFilms } from '../../utils';

function Catalog(): JSX.Element {
  const dispatch = useDispatch();
  const activeGenre = useSelector(getActiveGenre);
  const films = useSelector(getFilms);
  const stepCount = useSelector(getStepCount);

  const filmsByGenre = getFilteredFilms(films, activeGenre);
  const filmsToRender = filmsByGenre.slice(0, stepCount);
  const isButtonVisible = filmsByGenre.length > filmsToRender.length;

  const onGenresItemClick = (genre: string) => {
    dispatch(changeGenre(genre));
    dispatch(resetStepCount());
  };

  return (
    <CatalogSection>
      <GenresList onGenresItemClick={onGenresItemClick} />
      <FilmsList films={filmsToRender} />
      {isButtonVisible && <ShowMore />}
    </CatalogSection>
  );
}

export default Catalog;
