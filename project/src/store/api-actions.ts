import camelcaseKeys from 'camelcase-keys';
import {
  loadFilms,
  loadFilm,
  loadPromoFilm,
  loadReviews,
  redirectToRoute,
  requireAuthorization,
  requireLogout
} from './action';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { Film } from '../types/film';
import { Review } from '../types/review';
import { User } from '../types/user';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';

export const fetchFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Film[]>(APIRoute.Films);
    dispatch(loadFilms(data.map((film) => camelcaseKeys(film))));
  };

export const fetchPromoFilm = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    dispatch(loadPromoFilm(camelcaseKeys(data)));
  };

export const fetchFilm = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
    dispatch(loadFilm(camelcaseKeys(data)));
  };

export const fetchReviews = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
    dispatch(loadReviews(data));
  };

export const checkAuth = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<User>(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

export const login = (authData: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.post<User>(APIRoute.Login, authData);
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

export const logout = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
