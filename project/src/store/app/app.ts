import { createReducer } from '@reduxjs/toolkit';
import { AppReducer } from '../../types/state';
import { changeGenre, incrementStep, resetStepCount } from '../action';
import { DEFAULT_GENRE, INITIAL_FILMS_COUNT, STEP_COUNT } from '../../const';

const initialState: AppReducer = {
  activeGenre: DEFAULT_GENRE,
  stepCount: INITIAL_FILMS_COUNT,
};

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(incrementStep, (state) => {
      state.stepCount += STEP_COUNT;
    })
    .addCase(resetStepCount, (state) => {
      state.stepCount = INITIAL_FILMS_COUNT;
    });
});

export { appReducer };
