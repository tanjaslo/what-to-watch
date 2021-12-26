import classNames from 'classnames';
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { getActiveGenre } from '../../store/app/selectors';
import { getFilms } from '../../store/films/selectors';
import { DEFAULT_GENRE } from '../../const';
import { getGenresList, getUniqueGenres } from '../../utils';

type GenresListProps = {
  onGenresItemClick: (genre: string) => void;
};

function GenresList({ onGenresItemClick }: GenresListProps): JSX.Element {
  const activeGenre = useSelector(getActiveGenre);
  const films = useSelector(getFilms);

  const INITIAL_CLASSNAME = 'catalog__genres-item';

  const activeClassName = classNames(INITIAL_CLASSNAME, {
    'catalog__genres-item--active': activeGenre,
  });

  const genres = getUniqueGenres(films); //
  const genresList = getGenresList(DEFAULT_GENRE, genres);

  const genresItemClickHandler =
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
            onClick={genresItemClickHandler(genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
