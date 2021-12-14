import { Film } from './film';
import { AuthorizationStatus } from '../const';
import { Review } from './review';

export type State = {
  activeGenre: string,
  films: Film[],
  promoFilm: Film | null,
  reviews: Review[],
  currentFilm: Film | null,
  stepCount: number,
  authStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};
