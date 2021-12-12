import { changeGenre, incrementStep, loadFilms, resetStepCount } from '../store/action';

export enum ActionType {
  ChangeGenre = 'genre/changeGenre',
  IncrementStep = 'films/incrementStep',
  ResetStepCount = 'films/resetStepCount',
  LoadFilms = 'data/loadFilms',
}

export type Actions = ReturnType<typeof changeGenre>
  | ReturnType<typeof incrementStep>
  | ReturnType<typeof resetStepCount>
  | ReturnType<typeof loadFilms>;
