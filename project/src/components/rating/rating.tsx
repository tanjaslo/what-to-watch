import React from 'react';

const MAX_RATING = 10;

function Rating(): JSX.Element {

  //const ratings = new Array(MAX_RATING).fill(null).map((item, i) => i + 1).reverse();
  //const ratings = Array.from({length: MAX_RATING}, (_, i) => i + 1).reverse();

  const ratings: JSX.Element[] = [];
  for (let rating = MAX_RATING; rating > 0; rating--) {
    ratings.push(
      <React.Fragment key={rating}>
        <input
          className="rating__input"
          type="radio"
          name="rating"
          id={`star-${rating}`}
          value={rating}
        />
        <label
          className="rating__label"
          htmlFor={`star-${rating}`}
        >Rating {rating}
        </label>
      </React.Fragment>,
    );
  }
  return (
    <div className="rating">
      <div className="rating__stars">
        {ratings}
      </div>
    </div>
  );
}

export default Rating;
