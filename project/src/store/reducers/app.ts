import { Actions, ActionType } from '../../types/action';
import { AppReducer } from '../../types/state';
import { DEFAULT_GENRE, INITIAL_FILMS_COUNT, STEP_COUNT } from '../../const';

const initialState: AppReducer = {
  activeGenre: DEFAULT_GENRE,
  stepCount: INITIAL_FILMS_COUNT,
};

const appReducer = (state = initialState, action: Actions): AppReducer => {
  const type = action.type;

  switch (type) {
    case ActionType.ChangeGenre:
      return {
        ...state,
        activeGenre: action.payload,
      };
    case ActionType.IncrementStep:
      return {
        ...state,
        stepCount: state.stepCount + STEP_COUNT,
      };
    case ActionType.ResetStepCount:
      return {
        ...state,
        stepCount: initialState.stepCount,
      };
    default:
      return state;
  }
};

export { appReducer };

