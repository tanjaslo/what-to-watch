import classNames from 'classnames';
import { SyntheticEvent } from 'react';
import { useState } from 'react';
import { GENRES_LIST, DEFAULT_GENRE } from '../../const';

function GenresList(): JSX.Element {

  const [activeGenre, setActiveGenre] = useState<string>(DEFAULT_GENRE);
  //console.log(activeGenre);

  const INITIAL_CLASS = 'catalog__genres-item';

  const activeClassName = classNames(
    INITIAL_CLASS,
    {'catalog__genres-item--active': activeGenre},
  );

  const handleGenresItemClick = (evt: SyntheticEvent<HTMLElement>) => {
    evt.preventDefault();
    const newActiveGenre = evt.currentTarget.dataset.value as string;
    setActiveGenre(newActiveGenre);
  };

  return (
    <ul className="catalog__genres-list">
      {GENRES_LIST.map((genre) => (
        <li
          className={genre === activeGenre
            ? activeClassName
            : INITIAL_CLASS}
          key={genre}
        >
          <a
            href={`#${genre}`}
            className="catalog__genres-link"
            data-value={genre}
            onClick={handleGenresItemClick}
          >{genre}
          </a>
        </li>))}
    </ul>
  );
}

export default GenresList;