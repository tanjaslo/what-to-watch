import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import type { Film } from '../../types/film';
import type { Review } from '../../types/review';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PlayerPage from '../../pages/player-page/player-page';
import UserPage from '../../pages/user-page/user-page';

type AppScreenProps = {
  films: Film[];
  reviews: Review[];
};

function App({ films, reviews }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.Login}>
          <UserPage />
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyListPage films={films} />
        </Route>
        <Route exact path={AppRoute.Movie}>
          <MoviePage films={films} reviews={reviews} />
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReviewPage films={films} />
        </Route>
        <Route exact path={AppRoute.Player}>
          <PlayerPage films={films} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
