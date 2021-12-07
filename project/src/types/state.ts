import { Film } from './film';

export type State = {
  activeGenre: string,
  films: Film[],
  stepCount: number,
};
