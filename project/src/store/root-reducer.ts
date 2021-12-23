import { combineReducers } from 'redux';
import { appReducer } from './app/app';
import { filmsReducer } from './films/films';
import { reviewsReducer } from './reviews/reviews';
import { userReducer } from './user/user';

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
