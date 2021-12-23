import { combineReducers } from 'redux';
import { appReducer } from './app';
import { filmsReducer } from './films';
import { reviewsReducer } from './reviews';
import { userReducer } from './user';

export enum NameSpace {
  app = 'APP',
  films = 'FILMS',
  reviews = 'REVIEWS',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.app]: appReducer,
  [NameSpace.films]: filmsReducer,
  [NameSpace.reviews]: reviewsReducer,
  [NameSpace.user]: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
