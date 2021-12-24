import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Film, Genre } from '../types/film';
import { Review } from '../types/review';
import { User } from '../types/user';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeGenre = createAction<Genre>(ActionType.ChangeGenre);
export const incrementStep = createAction<number>(ActionType.IncrementStep);
export const resetStepCount = createAction(ActionType.ResetStepCount);

export const loadFilm = createAction<Film>(ActionType.LoadFilm);
export const loadPromoFilm = createAction<Film>(ActionType.LoadPromoFilm);
export const loadFilms = createAction<Film[]>(ActionType.LoadFilms);
export const loadSimilarFilms = createAction<Film[]>(ActionType.LoadSimilarFilms);
export const loadMyList = createAction<Film[]>(ActionType.LoadMyList);
export const updateFilmStatus = createAction<Film>(ActionType.UpdateFilmStatus);

export const loadReviews = createAction<Review[]>(ActionType.LoadReviews);

export const redirectToRoute = createAction<AppRoute>(ActionType.RedirectToRoute);

export const requireAuthorization = createAction<AuthorizationStatus>(ActionType.RequireAuthorization);
export const setUserData = createAction<User>(ActionType.SetUserData);
export const requireLogout = createAction(ActionType.RequireLogout);
