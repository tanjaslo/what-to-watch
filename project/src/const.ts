export const BACKEND_URL = 'https://8.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'wtw-autorization-token';

export const AUTH_FAIL_MESSAGE = 'Please login';

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

export const MyListButtonType = {
  ADD: {
    imgWidth: '19',
    imgHeight: '20',
    use: '#add',
    viewBox: '0 0 19 20',
  },
  IN_LIST: {
    imgWidth: '18',
    imgHeight: '14',
    use: '#in-list',
    viewBox: '0 0 18 14',
  },
};

export enum AppRoute {
  AddReview = '/films/:id/review',
  Login = '/login',
  Movie = '/films/:id',
  MyList = '/my-list',
  Player = '/player/:id',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  MyList = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum FavoriteStatus {
  True = 1,
  False = 0,
}
