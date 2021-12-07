export const DEFAULT_GENRE = 'All genres';
export const INITIAL_FILMS_COUNT = 8;
export const STEP_COUNT = INITIAL_FILMS_COUNT;

export const GENRES_LIST = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

export const TabItem = {
  OVERVIEW: 'overview',
  DETAILS: 'details',
  REVIEWS: 'reviews',
};

export enum AppRoute {
  AddReview = '/films/:id/review',
  Login = '/login',
  Movie = '/films/:id',
  MyList = '/mylist',
  Player = '/player/:id',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
