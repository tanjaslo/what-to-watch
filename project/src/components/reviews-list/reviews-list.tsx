import type { Review } from '../../types/review';
import UserReview from '../user-review/user-review';

const NO_REVIEWS_TEXT = 'There is no review on this film yet';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  if (reviews.length === 0) {
    return (
      <div className="film-card__reviews-col">
        <h1 className="film-card__title">{NO_REVIEWS_TEXT}</h1>
      </div>
    );
  }

  const reviewsList = reviews.map((review) => (
    <UserReview key={review.id} {...{ review }} />
  ));

  const midReviewsLength = Math.ceil(reviewsList.length / 2);
  const leftColReviews = reviewsList.slice(0, midReviewsLength);
  const rightColReviews = reviewsList.slice(midReviewsLength);

  return (
    <>
      <div className="film-card__reviews-col">{leftColReviews}</div>
      {rightColReviews.length > 0 && (
        <div className="film-card__reviews-col">{rightColReviews}</div>
      )}
    </>
  );
}

export default ReviewsList;
