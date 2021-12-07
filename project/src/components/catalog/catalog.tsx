import { State } from '../../types/state';
import { Actions } from '../../types/action';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { changeGenre, resetStepCount } from '../../store/action';
import { Film } from '../../types/film';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import CatalogSection from '../containers/catalog-section/catalog-section';
import ShowMore from '../show-more/show-more';
import { getFilteredFilms } from '../../utils';

type CatalogProps = {
  films: Film[];
};

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CatalogProps;

const mapStateToProps = ({ activeGenre, stepCount }: State) => ({
  activeGenre,
  stepCount,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onGenresItemClick(activeGenre: string) {
    dispatch(changeGenre(activeGenre));
    dispatch(resetStepCount());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

function Catalog({
  films,
  activeGenre,
  stepCount,
  onGenresItemClick,
}: ConnectedComponentProps): JSX.Element {
  const filmsByGenre = getFilteredFilms(films, activeGenre);
  const filmsToRender = filmsByGenre.slice(0, stepCount);
  const isButtonVisible = filmsByGenre.length > filmsToRender.length;

  return (
    <CatalogSection>
      <GenresList
        activeGenre={activeGenre}
        onGenresItemClick={onGenresItemClick}
      />
      <FilmsList films={filmsToRender} />
      {isButtonVisible && <ShowMore />}
    </CatalogSection>
  );
}

export { Catalog };
export default connector(Catalog);
