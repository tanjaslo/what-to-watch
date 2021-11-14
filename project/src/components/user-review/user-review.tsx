import type { Review } from '../../types/review';
import { formattedDate, humanizedDate } from '../../utils/date';

type ReviewProps = {
  review: Review;
}

function UserReview({review}: ReviewProps): JSX.Element {
  const {user, date, rating, comment} = review;
  const {name} = user;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time
            className="review__date"
            dateTime={formattedDate(date)}
          >
            {humanizedDate(date)}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default UserReview;
