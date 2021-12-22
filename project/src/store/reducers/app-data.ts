import { Actions, ActionType } from '../../types/action';
import { AppDataReducer } from '../../types/state';
import { DEFAULT_GENRE, INITIAL_FILMS_COUNT, STEP_COUNT } from '../../const';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  stepCount: INITIAL_FILMS_COUNT,
  isDataLoaded: false,
};

const appDataReducer = (state: AppDataReducer = initialState, action: Actions): AppDataReducer => {
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
    case ActionType.SetIsDataLoaded:
      return {
        ...state,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export { appDataReducer };

