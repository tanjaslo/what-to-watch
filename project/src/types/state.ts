import { Film } from './film';
import { Review } from './review';
import { User } from './user';
import { RootState } from '../store/reducers/root-reducer';
import { AuthorizationStatus } from '../const';

export type AppReducer = {
  activeGenre: string,
  stepCount: number,
};

export type FilmsReducer = {
  films: Film[],
  currentFilm: Film,
  promoFilm: Film,
  myListFilms: Film[],
  similarFilms: Film[],
  isDataLoaded: boolean,
};

export type ReviewsReducer = {
  reviews: Review[],
};

export type UserReducer = {
  authStatus: AuthorizationStatus,
  user: User | null,
};

export type State = RootState;
