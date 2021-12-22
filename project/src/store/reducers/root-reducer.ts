import { combineReducers } from 'redux';
import { appDataReducer } from './app-data';
import { filmsReducer } from './films';
import { reviewsReducer } from './reviews';
import { userReducer } from './user';

export enum NameSpace {
  APP_DATA = 'APP-DATA',
  FILMS = 'FILMS',
  REVIEWS = 'REVIEWS',
  USER = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.APP_DATA]: appDataReducer,
  [NameSpace.FILMS]: filmsReducer,
  [NameSpace.REVIEWS]: reviewsReducer,
  [NameSpace.USER]: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
