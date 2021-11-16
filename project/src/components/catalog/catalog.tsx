import { useState } from 'react';
import { Film } from '../../types/film';
import { DEFAULT_GENRE } from '../../const';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import CatalogSection from '../containers/catalog-section/catalog-section';

type CatalogProps = {
  films: Film[];
}

function Catalog({films}: CatalogProps): JSX.Element {

  const [activeGenre, setActiveGenre] = useState<string>(DEFAULT_GENRE);

  const filmsByGenre = activeGenre === DEFAULT_GENRE ?
    films : films.filter(({genre}) => genre === activeGenre);

  const onGenresItemClick = (genre: string): void => {
    setActiveGenre(genre);
  };

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

export default Catalog;
