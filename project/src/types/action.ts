import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import {
  AxiosInstance,
} from 'axios';
import { State } from '../types/state';

export enum ActionType {
  ChangeGenre = 'genre/changeGenre',
  IncrementStep = 'films/incrementStep',
  ResetStepCount = 'films/resetStepCount',
  LoadFilms = 'data/loadFilms',
  LoadPromoFilm = 'data/loadPromoFilm',
  LoadFilm = 'data/loadFilm',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  LoadMyList = 'data/loadMyList',
  UpdateFilmStatus = 'data/updateFilmStatus',
  LoadReviews = 'data/loadReviews',
  RedirectToRoute = 'route/redirectToRoute',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetUserData = 'user/setUserData',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
