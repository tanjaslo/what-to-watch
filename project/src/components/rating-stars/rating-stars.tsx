import { Fragment, ChangeEvent, useState } from 'react';

const MAX_RATING = 10;

function RatingStars(): JSX.Element {
  //const ratings = new Array(MAX_RATING).fill(null).map((item, i) => i + 1).reverse();
  //const ratings = Array.from({length: MAX_RATING}, (_, i) => i + 1).reverse();
  const [rating, setRating] = useState<number>(0);

  const handleRatingChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setRating(+target.value);
  };

  const stars: JSX.Element[] = [];
  for (let starsCount = MAX_RATING; starsCount > 0; starsCount--) {
    stars.push(
      <Fragment key={starsCount}>
        <input
          className="rating__input"
          type="radio"
          name="rating"
          id={`star-${starsCount}`}
          value={starsCount}
          onChange={handleRatingChange}
          checked={rating === starsCount}
        />
        <label className="rating__label" htmlFor={`star-${starsCount}`}>
          Rating {starsCount}
        </label>
      </Fragment>
    );
  }
  return (
    <div className="rating">
      <div className="rating__stars">{stars}</div>
    </div>
  );
}

export default RatingStars;
