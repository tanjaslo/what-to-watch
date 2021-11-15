import { useState } from 'react';
import { Film } from '../../types/film';
import { DEFAULT_GENRE } from '../../const';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';

type CatalogProps = {
  films: Film[];
  isMainPage?: boolean;
}

function Catalog({films, isMainPage}: CatalogProps): JSX.Element {

  const [activeGenre, setActiveGenre] = useState<string>(DEFAULT_GENRE);

  const filmsByGenre = activeGenre === DEFAULT_GENRE ?
    films : films.filter(({genre}) =>
      genre.slice(0, 4) === activeGenre.slice(0, 4));

  const onGenresItemClick = (genre: string): void => {
    setActiveGenre(genre);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {isMainPage ? (
        <>
          <GenresList activeGenre={activeGenre} onGenresItemClick={onGenresItemClick} />
          <FilmsList films={filmsByGenre} />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </>
      ) : (
        <FilmsList films={films} />
      )}
    </section>
  );
}

export default Catalog;
