import { useParams } from 'react-router';
import AddReviewLink from '../add-review-link/add-review-link';

type FilmCardButtonsProps = {
  isPromo?: boolean;
}

function FilmCardButtons({isPromo}: FilmCardButtonsProps): JSX.Element {
  const {id} : {id: string} = useParams();

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
      {!isPromo && <AddReviewLink id={+id} />}
    </div>
  );
}

export default FilmCardButtons;
