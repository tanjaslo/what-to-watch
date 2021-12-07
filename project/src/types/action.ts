import { changeGenre, incrementStep, resetStepCount } from '../store/action';

export enum ActionType {
  ChangeGenre = 'genre/changeGenre',
  IncrementStep = 'films/incrementStep',
  ResetStepCount = 'films/resetStepCount',
}

export type Actions = ReturnType<typeof changeGenre> | ReturnType<typeof incrementStep> | ReturnType<typeof resetStepCount>;
