import { Film } from './film';

export type State = {
  activeGenre: string,
  films: Film[],
  promoFilm: Film,
  stepCount: number,
};
