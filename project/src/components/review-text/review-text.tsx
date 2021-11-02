import { useState, ChangeEvent } from 'react';

function ReviewText(): JSX.Element {
  const [reviewText, setReviewText] = useState<string>('');

  const handleTextChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    const newReviewText = target.value;
    setReviewText(newReviewText);
  };

  return (
    <div className="add-review__text">
      <textarea
        className="add-review__textarea"
        name="review-text"
        id="review-text"
        placeholder="Review text"
        value = {reviewText}
        onChange={handleTextChange}
      >
      </textarea>
      <div className="add-review__submit">
        <button className="add-review__btn" type="submit">Post</button>
      </div>
    </div>
  );
}

export default ReviewText;
