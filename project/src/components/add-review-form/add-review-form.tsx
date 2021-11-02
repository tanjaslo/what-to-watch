import RatingStars from '../rating-stars/rating-stars';
import ReviewText from '../review-text/review-text';

function AddReviewForm(): JSX.Element {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <RatingStars />
        <ReviewText />
      </form>
    </div>
  );
}

export default AddReviewForm;
