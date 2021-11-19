import classNames from 'classnames';
import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_GENRE } from '../../const';
import { films } from '../../mocks/films';

type GenresListProps = {
  activeGenre: string;
  onGenresItemClick: (genre: string) => void;
}

function GenresList({activeGenre, onGenresItemClick}: GenresListProps): JSX.Element {

  const INITIAL_CLASSNAME = 'catalog__genres-item';

  const activeClassName = classNames(
    INITIAL_CLASSNAME,
    {'catalog__genres-item--active': activeGenre},
  );

  const genres = Array.from(
    films.reduce((acc, {genre}) => {
      acc.add(genre);
      return acc;
    }, new Set()));

  const genresList = [DEFAULT_GENRE, ...genres as string[]];

  const handleGenresItemClick = (evt: SyntheticEvent<HTMLElement>) => {
    evt.preventDefault();
    const newActiveGenre = evt.currentTarget.textContent as string;
    onGenresItemClick(newActiveGenre);
  };

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre) => (
        <li
          className={genre === activeGenre
            ? activeClassName
            : INITIAL_CLASSNAME}
          key={genre}
        >
          <Link
            to={`#${genre}`}
            className="catalog__genres-link"
            onClick={handleGenresItemClick}
          >{genre}
          </Link>
        </li>))}
    </ul>
  );
}

export default GenresList;
