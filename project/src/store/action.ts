import { ActionType } from '../types/action';

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const incrementStep = (stepCount: number) => ({
  type: ActionType.IncrementStep,
  payload: stepCount,
} as const);

export const resetStepCount = () => ({
  type: ActionType.ResetStepCount,
} as const);
