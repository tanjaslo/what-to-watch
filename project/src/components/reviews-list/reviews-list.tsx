import type { Review } from '../../types/review';
import UserReview from '../user-review/user-review';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <div className="film-card__reviews-col">
      {reviews.map((review) => (
        <UserReview
          key={review.id}
          review={review}
        />
      ))};
    </div>
  );
}

export default ReviewsList;
