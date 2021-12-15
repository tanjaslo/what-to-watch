import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { AuthorizationStatus, DEFAULT_GENRE, INITIAL_FILMS_COUNT, STEP_COUNT } from '../const';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  stepCount: INITIAL_FILMS_COUNT,
  films: [],
  promoFilm: null,
  currentFilm: null,
  reviews: [],
  authStatus: AuthorizationStatus.Unknown,
  user: null,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
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
    case ActionType.LoadFilms:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LoadPromoFilm:
      return {
        ...state,
        promoFilm: action.payload,
      };
    case ActionType.LoadFilm:
      return {
        ...state,
        currentFilm: action.payload,
      };
    case ActionType.LoadReviews:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authStatus: action.payload,
      };
    case ActionType.RequireLogout:
      return {
        ...state,
        authStatus: AuthorizationStatus.NoAuth,
      };
    case ActionType.SetUserData:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
