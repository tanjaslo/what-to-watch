import { Actions, ActionType } from '../../types/action';
import { ReviewsReducer } from '../../types/state';

const initialState = {
  reviews: [],
};

const reviewsReducer = (state = initialState, action: Actions): ReviewsReducer => {
  const type = action.type;

  switch (type) {
    case ActionType.LoadReviews:
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
};

export { reviewsReducer };
