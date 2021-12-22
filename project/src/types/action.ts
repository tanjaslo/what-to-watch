import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import {
  AxiosInstance,
} from 'axios';
import { State } from '../types/state';
import {
  changeGenre,
  incrementStep,
  loadFilms,
  loadPromoFilm,
  loadFilm,
  loadMyList,
  loadReviews,
  loadSimilarFilms,
  updateFilmStatus,
  resetStepCount,
  redirectToRoute,
  requireAuthorization,
  requireLogout,
  setIsDataLoaded,
  setUserData,
} from '../store/action';

export enum ActionType {
  Redirect = 'app-data/redirect',
  ChangeGenre = 'app-data/changeGenre',
  IncrementStep = 'app-data/incrementStep',
  ResetStepCount = 'app-data/resetStepCount',
  SetIsDataLoaded = 'app-data/setIsDataLoaded',
  LoadFilms = 'films/loadFilms',
  LoadPromoFilm = 'films/loadPromoFilm',
  LoadFilm = 'films/loadFilm',
  LoadSimilarFilms = 'films/loadSimilarFilms',
  LoadMyList = 'films/loadMyList',
  LoadReviews = 'films/loadReviews',
  UpdateFilmStatus = 'films/updateFilmStatus',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetUserData = 'user/setUserData',
}

export type Actions =
  ReturnType<typeof changeGenre> |
  ReturnType<typeof incrementStep> |
  ReturnType<typeof resetStepCount> |
  ReturnType<typeof setIsDataLoaded> |
  ReturnType<typeof loadFilms> |
  ReturnType<typeof loadPromoFilm> |
  ReturnType<typeof loadFilm> |
  ReturnType<typeof loadReviews> |
  ReturnType<typeof loadSimilarFilms> |
  ReturnType<typeof loadMyList> |
  ReturnType<typeof updateFilmStatus> |
  ReturnType<typeof redirectToRoute> |
  ReturnType<typeof requireAuthorization> |
  ReturnType<typeof requireLogout> |
  ReturnType<typeof setUserData>;


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
