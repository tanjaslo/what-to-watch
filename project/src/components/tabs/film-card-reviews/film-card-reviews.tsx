import type { Review } from '../../../types/review';
import ReviewsList from '../../reviews-list/reviews-list';

type FilmCardReviewsProps = {
  reviews: Review[];
}

function FilmCardReviews({reviews}: FilmCardReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <ReviewsList reviews={reviews} />
    </div>
  );
}

export default FilmCardReviews;
