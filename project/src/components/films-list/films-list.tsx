import { useState } from 'react';
import type { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Film[];
}

type ActiveCard = null | number;

function FilmsList({films}: FilmsListProps): JSX.Element {

  const [, setActiveCard] = useState<ActiveCard>(null);

  const handleMouseEnter = (id: number) => {
    setActiveCard(id);
    // eslint-disable-next-line no-console
    //console.log(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          film={film}
          key={film.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />))}
    </div>
  );
}

export default FilmsList;
