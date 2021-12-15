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
  loadReviews,
  resetStepCount,
  redirectToRoute,
  requireAuthorization,
  requireLogout,
  setUserData,
} from '../store/action';

export enum ActionType {
  ChangeGenre = 'genre/changeGenre',
  IncrementStep = 'films/incrementStep',
  ResetStepCount = 'films/resetStepCount',
  LoadFilms = 'data/loadFilms',
  LoadPromoFilm = 'data/loadPromoFilm',
  LoadFilm = 'data/loadFilm',
  LoadReviews = 'data/loadReviews',
  Redirect = 'route/redirect',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetUserData = 'user/setUserData',
}

export type Actions =
  ReturnType<typeof changeGenre> |
  ReturnType<typeof incrementStep> |
  ReturnType<typeof resetStepCount> |
  ReturnType<typeof loadFilms> |
  ReturnType<typeof loadPromoFilm> |
  ReturnType<typeof loadFilm> |
  ReturnType<typeof loadReviews> |
  ReturnType<typeof redirectToRoute> |
  ReturnType<typeof requireAuthorization> |
  ReturnType<typeof requireLogout> |
  ReturnType<typeof setUserData>;


export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
