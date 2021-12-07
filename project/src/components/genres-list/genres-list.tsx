import classNames from 'classnames';
import { SyntheticEvent } from 'react';
import { DEFAULT_GENRE } from '../../const';
import { films } from '../../mocks/films';
import { getGenresList, getUniqueGenres } from '../../utils';

type GenresListProps = {
  activeGenre: string;
  onGenresItemClick: (genre: string) => void;
  resetRenderedFilmsCount: () => void;
};

function GenresList({
  activeGenre,
  onGenresItemClick,
  resetRenderedFilmsCount,
}: GenresListProps): JSX.Element {
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
      resetRenderedFilmsCount();
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

export default GenresList;
