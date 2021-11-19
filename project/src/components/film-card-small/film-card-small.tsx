import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPreview from '../video-preview/video-preview';

type FilmCardSmallProps = {
  film: Film;
}

function FilmCardSmall({film}: FilmCardSmallProps): JSX.Element {
  const {id, name, previewImage, previewVideoLink} = film;

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleMouseEnter = () => setIsPlaying(true);
  const handleMouseLeave = () => setIsPlaying(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
