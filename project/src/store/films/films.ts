import { Actions, ActionType } from '../../types/action';
import { Film } from '../../types/film';
import { FilmsReducer } from '../../types/state';

const initialState: FilmsReducer = {
  films: [],
  promoFilm: {} as Film,
  currentFilm: {} as Film,
  myListFilms: [],
  similarFilms: [],
  isDataLoaded: false,
};

const filmsReducer = (state = initialState, action: Actions): FilmsReducer => {
  const type = action.type;

  switch (type) {
    case ActionType.LoadFilm:
      return {
        ...state,
        currentFilm: action.payload,
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
    case ActionType.LoadMyList:
      return {
        ...state,
        myListFilms: action.payload,
      };
    case ActionType.LoadSimilarFilms:
      return {
        ...state,
        similarFilms: action.payload,
      };
    case ActionType.UpdateFilmStatus:
      return {
        ...state,
        currentFilm: action.payload,
        promoFilm: action.payload,
      };
    default:
      return state;
  }
};

export { filmsReducer };
