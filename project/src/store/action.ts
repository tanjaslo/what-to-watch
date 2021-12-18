import { ActionType } from '../types/action';
import { Film } from '../types/film';
import { Review } from '../types/review';
import { User } from '../types/user';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const incrementStep = (stepCount: number) => ({
  type: ActionType.IncrementStep,
  payload: stepCount,
} as const);

export const resetStepCount = () => ({
  type: ActionType.ResetStepCount,
} as const);

export const loadFilms = (films: Film[]) => ({
  type: ActionType.LoadFilms,
  payload: films,
} as const);

export const loadFilm = (currentFilm: Film) => ({
  type: ActionType.LoadFilm,
  payload: currentFilm,
} as const);

export const loadPromoFilm = (promoFilm: Film) => ({
  type: ActionType.LoadPromoFilm,
  payload: promoFilm,
} as const);

export const loadReviews = (reviews: Review[]) => ({
  type: ActionType.LoadReviews,
  payload: reviews,
} as const);

export const loadMyList = (myList: Film[]) => ({
  type: ActionType.LoadMyList,
  payload: myList,
} as const);

export const updateFilmStatus = (film: Film) => ({
  type: ActionType.UpdateFilmStatus,
  payload: film,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.Redirect,
  payload: url,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const setUserData = (userData: User | null) => ({
  type: ActionType.SetUserData,
  payload: userData,
} as const);
