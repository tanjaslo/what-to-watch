import { Film } from '../../types/film';

type FilmCardBgProps = {
  film: Film;
}

function FilmCardBg({film}: FilmCardBgProps): JSX.Element {
  const {backgroundImage, name} = film;

  return (
    <div className="film-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
}

export default FilmCardBg;
