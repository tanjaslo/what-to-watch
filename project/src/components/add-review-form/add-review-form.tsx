import Rating from '../rating/rating';

function AddReviewForm(): JSX.Element {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <Rating />

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
