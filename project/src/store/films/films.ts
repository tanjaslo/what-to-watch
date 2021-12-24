import { createReducer } from '@reduxjs/toolkit';
import { FilmsReducer } from '../../types/state';
import { loadFilm, loadFilms, loadMyList, loadPromoFilm, loadSimilarFilms, updateFilmStatus } from '../action';

const initialState: FilmsReducer = {
  films: [],
  promoFilm: null,
  currentFilm: null,
  myListFilms: [],
  similarFilms: [],
  isDataLoaded: false,
};

const filmsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadMyList, (state, action) => {
      state.myListFilms = action.payload;
    })
    .addCase(updateFilmStatus, (state, action) => {
      state.currentFilm = action.payload;
      state.promoFilm = action.payload;
    });
});

export { filmsReducer };
