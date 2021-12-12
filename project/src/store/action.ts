import { ActionType } from '../types/action';
import { Film } from '../types/film';

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

export const loadFilms = (films: Film[]) => ({
  type: ActionType.LoadFilms,
  payload: films,
} as const);
