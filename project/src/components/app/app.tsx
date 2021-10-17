import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoutes} from '../../const';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import MainPage from '../pages/main-page/main-page';
import MoviePage from '../pages/movie-page/movie-page';
import MyListPage from '../pages/my-list-page/my-list-page';
import PlayerPage from '../pages/player-page/player-page';
import UserPage from '../pages/user-page/user-page';

type AppScreenProps = {
  filmsCount: number;
  title: string;
  genre: string;
  year: number;
}

function App({filmsCount, title, genre, year}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.Root}>
          <MainPage
            filmsCount={filmsCount}
            title={title}
            genre={genre}
            year={year}
          />
        </Route>
        <Route exact path={AppRoutes.Login}>
          <UserPage />
        </Route>
        <Route exact path={AppRoutes.MyList}>
          <MyListPage />
        </Route>
        <Route exact path={AppRoutes.Movie}>
          <MoviePage />
        </Route>
        <Route exact path={AppRoutes.AddReview}>
          <AddReviewPage />
        </Route>
        <Route exact path={AppRoutes.Player}>
          <PlayerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
