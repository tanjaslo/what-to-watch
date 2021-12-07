import { useState } from 'react';
import { State } from '../../types/state';
import { Actions } from '../../types/action';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { ChangeGenre } from '../../store/action';
import { Film } from '../../types/film';
import { DEFAULT_GENRE, INITIAL_FILMS_COUNT, STEP } from '../../const';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import CatalogSection from '../containers/catalog-section/catalog-section';
import ShowMore from '../show-more/show-more';

type CatalogProps = {
  films: Film[];
};

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CatalogProps;

const mapStateToProps = (state: State) => ({
  activeGenre: state.genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onGenresItemClick(activeGenre: string) {
    dispatch(ChangeGenre(activeGenre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

function Catalog({
  films,
  activeGenre,
  onGenresItemClick,
}: ConnectedComponentProps): JSX.Element {
  const [filmsCount, setFilmsCount] = useState(INITIAL_FILMS_COUNT);

  const filmsByGenre =
    activeGenre === DEFAULT_GENRE
      ? films
      : films.filter((film) => film.genre === activeGenre);

  const filmsToRender = filmsByGenre.slice(0, filmsCount);

  const isButtonVisible = filmsByGenre.length > filmsToRender.length;

  const showFilmsInitialCount = () => {
    setFilmsCount(INITIAL_FILMS_COUNT);
  };

  const onShowMoreBtnClick = () => {
    setFilmsCount((count) => count + STEP);
  };

  return (
    <CatalogSection>
      <GenresList
        activeGenre={activeGenre}
        onGenresItemClick={onGenresItemClick}
        resetRenderedFilmsCount={showFilmsInitialCount}
      />
      <FilmsList films={filmsToRender} />
      {isButtonVisible ? <ShowMore onClick={onShowMoreBtnClick} /> : null}
    </CatalogSection>
  );
}

export default connector(Catalog);
