import { Film } from './film';
import { Review } from './review';
import { User } from './user';
import { AuthorizationStatus } from '../const';

export type State = {
  activeGenre: string,
  films: Film[],
  promoFilm: Film | null,
  reviews: Review[],
  currentFilm: Film | null,
  stepCount: number,
  authStatus: AuthorizationStatus,
  user: User | null,
  isDataLoaded: boolean,
};
