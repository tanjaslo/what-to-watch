import { FilmId } from '../../types/film';
import AddReviewLink from '../add-review-link/add-review-link';
import MyListBtn from './my-list-btn/my-list-btn';
import PlayBtn from './play-btn/play-btn';

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
      <PlayBtn id={id} />
      <MyListBtn id={id} isFavorite={isFavorite} />
      {hasAddReviewLink && <AddReviewLink id={id} />}
    </div>
  );
}

export default FilmCardButtons;
