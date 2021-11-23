export enum ActionType {
  ChangeGenre = 'genre/ChangeGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
}

export type Actions = ChangeGenreAction;
