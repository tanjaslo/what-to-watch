import { State } from '../../types/state';
import { Actions } from '../../types/action';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { ChangeGenre } from '../../store/action';
import { Film } from '../../types/film';
import { DEFAULT_GENRE } from '../../const';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import CatalogSection from '../containers/catalog-section/catalog-section';

type CatalogProps = {
  films: Film[];
}

const mapStateToProps = (state: State) => ({
  activeGenre: state.genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onGenresItemClick(activeGenre: string) {
    dispatch(ChangeGenre(activeGenre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CatalogProps;

function Catalog({films, activeGenre, onGenresItemClick}: ConnectedComponentProps): JSX.Element {

  const filmsByGenre = activeGenre === DEFAULT_GENRE ?
    films : films.filter((film) => film.genre === activeGenre);

  return (
    <CatalogSection>
      <GenresList
        activeGenre={activeGenre}
        onGenresItemClick={onGenresItemClick}
      />
      <FilmsList
        films={filmsByGenre}
      />
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </CatalogSection>
  );
}

export default connector(Catalog);
