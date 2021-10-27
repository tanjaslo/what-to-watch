export const DEFAULT_GENRE = 'All genres';

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

export const NavigationItem = {
  Overview: 'overview',
  Details: 'details',
  Reviews: 'reviews',
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
