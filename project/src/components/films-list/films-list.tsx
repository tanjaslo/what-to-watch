import { useState } from 'react';
import type { Film } from '../../types/film';
import FilmCardSmall from '../film-card-small/film-card-small';

type FilmsListProps = {
  films: Film[];
}

type ActiveCardId = null | number;

function FilmsList({films}: FilmsListProps): JSX.Element {

  const [activeCardId, setActiveCardId] = useState<ActiveCardId>(null);

  const handleMouseEnter = (id: number) => setActiveCardId(id);
  const handleMouseLeave = () => setActiveCardId(null);

  const isActive = (id: number): boolean => activeCardId === id;

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCardSmall
          film={film}
          key={film.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          isPlaying={isActive(film.id)}
        />))}
    </div>
  );
}

export default FilmsList;
