import { FilmId } from '../../types/film';
import AddReviewLink from '../add-review-link/add-review-link';
import MyListBtn from './my-list-btn/my-list-btn';

type FilmCardButtonsProps = {
  hasAddReviewLink?: boolean;
  id: FilmId;
  isFavorite: boolean;
};

function FilmCardButtons({
  hasAddReviewLink,
  id,
  isFavorite,
}: FilmCardButtonsProps): JSX.Element {
  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <MyListBtn id={id} isFavorite={isFavorite} />
      {hasAddReviewLink && <AddReviewLink id={id} />}
    </div>
  );
}

export default FilmCardButtons;
