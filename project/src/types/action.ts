export enum ActionType {
  ChangeGenre = 'genre/ChangeGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: {
    genre: string;
  }
}

export type Actions = ChangeGenreAction;
