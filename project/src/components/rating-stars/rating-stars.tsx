import React from 'react';

const MAX_RATING = 10;

function RatingStars(): JSX.Element {

  //const ratings = new Array(MAX_RATING).fill(null).map((item, i) => i + 1).reverse();
  //const ratings = Array.from({length: MAX_RATING}, (_, i) => i + 1).reverse();

  const stars: JSX.Element[] = [];
  for (let star = MAX_RATING; star > 0; star--) {
    stars.push(
      <React.Fragment key={star}>
        <input
          className="rating__input"
          type="radio"
          name="rating"
          id={`star-${star}`}
          value={star}
        />
        <label
          className="rating__label"
          htmlFor={`star-${star}`}
        >Rating {star}
        </label>
      </React.Fragment>,
    );
  }
  return (
    <div className="rating">
      <div className="rating__stars">
        {stars}
      </div>
    </div>
  );
}

export default RatingStars;
