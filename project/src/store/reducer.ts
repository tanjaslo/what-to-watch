import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { DEFAULT_GENRE } from '../const';
import { films } from '../mocks/films';

const initialState = {
  genre: DEFAULT_GENRE,
  films: films.slice(1),
};

const reducer = (state: State = initialState, action: Actions): State => {
  const type = action.type;
  const payload = action.payload;

  switch (type) {
    case ActionType.ChangeGenre: {
      return {
        ...state,
        genre: payload,
      };
    }
    default:
      return state;
  }
};

export {reducer};
