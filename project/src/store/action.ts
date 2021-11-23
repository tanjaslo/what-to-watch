import { ActionType,
  ChangeGenreAction } from '../types/action';

export const ChangeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});
