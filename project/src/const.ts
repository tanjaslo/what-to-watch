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
