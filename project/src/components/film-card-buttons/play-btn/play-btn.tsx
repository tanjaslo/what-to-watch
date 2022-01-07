import { useHistory } from 'react-router-dom';
import { FilmId } from '../../../types/film';

type PlayBtnProps = {
  id: FilmId;
};

function PlayBtn({ id }: PlayBtnProps): JSX.Element {
  const history = useHistory();

  const onPlayClickHandler = () => {
    history.push(`/player/${id}`);
  };

  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={onPlayClickHandler}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayBtn;
