import { Film } from './film';
import { Review } from './review';
import { User } from './user';
import { AuthorizationStatus } from '../const';

export type State = {
  activeGenre: string,
  films: Film[],
  myListFilms: Film[],
  promoFilm: Film,
  currentFilm: Film,
  reviews: Review[],
  stepCount: number,
  authStatus: AuthorizationStatus,
  user: User | null,
  isDataLoaded: boolean,
};
