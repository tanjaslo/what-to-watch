import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { DEFAULT_GENRE, INITIAL_FILMS_COUNT, STEP_COUNT } from '../const';
import { films } from '../mocks/films';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  films: films.slice(1),
  promoFilm: films[0],
  stepCount: INITIAL_FILMS_COUNT,
};

const reducer = (state: State = initialState, action: Actions): State => {
  const type = action.type;

  switch (type) {
    case ActionType.ChangeGenre: {
      return {
        ...state,
        activeGenre: action.payload,
      };
    }
    case ActionType.IncrementStep: {
      return {
        ...state,
        stepCount: state.stepCount + STEP_COUNT,
      };
    }
    case ActionType.ResetStepCount: {
      return {
        ...state,
        stepCount: initialState.stepCount,
      };
    }
    default:
      return state;
  }
};

export { reducer };
