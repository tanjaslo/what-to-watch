import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
  onMouseEnter: (id: number) => void;
  onMouseLeave: (id: null) => void;
}

function FilmCard({film, onMouseEnter, onMouseLeave}: FilmCardProps): JSX.Element {
  const {id, name} = film;

  const handleMouseEnter = () => onMouseEnter(id);
  const handleMouseLeave = () => onMouseLeave(null);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film} />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`/films/${id}`}
        >{name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
