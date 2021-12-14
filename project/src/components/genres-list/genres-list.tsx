import classNames from 'classnames';
import { connect, ConnectedProps } from 'react-redux';
import { SyntheticEvent } from 'react';
import { DEFAULT_GENRE } from '../../const';
import { State } from '../../types/state';
import { getGenresList, getUniqueGenres } from '../../utils';

const mapStateToProps = ({ films, activeGenre }: State) => ({
  films,
  activeGenre,
});

type GenresListProps = {
  onGenresItemClick: (genre: string) => void;
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenresListProps;

function GenresList({
  films,
  activeGenre,
  onGenresItemClick,
}: ConnectedComponentProps): JSX.Element {
  const INITIAL_CLASSNAME = 'catalog__genres-item';

  const activeClassName = classNames(INITIAL_CLASSNAME, {
    'catalog__genres-item--active': activeGenre,
  });

  const genres = getUniqueGenres(films);
  const genresList = getGenresList(DEFAULT_GENRE, genres);

  const handleGenresItemClick =
    (newActiveGenre: string) => (evt: SyntheticEvent<HTMLElement>) => {
      evt.preventDefault();
      onGenresItemClick(newActiveGenre);
    };

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
        <li
          className={
            genre === activeGenre ? activeClassName : INITIAL_CLASSNAME
          }
          key={genre}
        >
          <a
            href="/"
            className="catalog__genres-link"
            onClick={handleGenresItemClick(genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export { GenresList };
export default connector(GenresList);
