import { changeGenre } from '../store/action';

export enum ActionType {
  ChangeGenre = 'genre/changeGenre',
}

export type Actions = ReturnType<typeof changeGenre>;
