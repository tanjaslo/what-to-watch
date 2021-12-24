import { createReducer } from '@reduxjs/toolkit';
import { ReviewsReducer } from '../../types/state';
import { loadReviews } from '../action';

const initialState: ReviewsReducer = {
  reviews: [],
};

const reviewsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export { reviewsReducer };
