import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPreview from '../video-preview/video-preview';

type FilmCardSmallProps = {
  film: Film;
  onMouseEnter: (id: number) => void;
  onMouseLeave: (id: null) => void;
  isPlaying: boolean;
}

function FilmCardSmall({film, onMouseEnter, onMouseLeave, isPlaying}: FilmCardSmallProps): JSX.Element {
  const {id, name, previewImage, previewVideoLink} = film;
  //const handleMouseEnter = () => onMouseEnter(id);
  //const handleMouseLeave = () => onMouseLeave(null);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave(null)}
    >
      <div className="small-film-card__image">
        <VideoPreview
          poster={previewImage}
          src={previewVideoLink}
          isPlaying={isPlaying}
        />
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

export default FilmCardSmall;
