import { useState } from 'react';
import type { Film } from '../../types/film';
import FilmCardSmall from '../film-card-small/film-card-small';

type FilmsListProps = {
  films: Film[];
}

type ActiveCard = null | number;

function FilmsList({films}: FilmsListProps): JSX.Element {

  const [activeCard, setActiveCard] = useState<ActiveCard>(null);

  const handleMouseEnter = (id: number) => {
    setActiveCard(id);
    //eslint-disable-next-line no-console
    console.log(id);
  };

  const handleMouseLeave = () => setActiveCard(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCardSmall
          film={film}
          key={film.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          isPlaying={Number(film.id) === activeCard}
        />))}
    </div>
  );
}

export default FilmsList;
