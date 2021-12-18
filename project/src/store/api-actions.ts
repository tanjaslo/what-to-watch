import camelcaseKeys from 'camelcase-keys';
import {
  loadFilms,
  loadFilm,
  loadPromoFilm,
  loadMyList,
  loadReviews,
  redirectToRoute,
  requireAuthorization,
  setUserData,
  requireLogout,
  updateFilmStatus,
} from './action';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { Film } from '../types/film';
import { Review } from '../types/review';
import { User } from '../types/user';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus, FavoriteStatus } from '../const';

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

export const fetchMyList = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Film[]>(APIRoute.MyList);
    dispatch(loadMyList(data.map((film) => camelcaseKeys(film))));
  };

export const setMyList = (id: string, status: FavoriteStatus): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.post<Film>(`${APIRoute.MyList}/${id}/${status}`);
    dispatch(updateFilmStatus(camelcaseKeys(data)));
  };

export const checkAuth = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get<User>(APIRoute.Login);
      dispatch(setUserData(camelcaseKeys(data)));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  };

export const login = (authData: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.post<User>(APIRoute.Login, authData);
    saveToken(data.token);
    dispatch(setUserData(camelcaseKeys(data)));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  };

export const logout = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(setUserData(null));
    dispatch(redirectToRoute(AppRoute.Root));
  };
