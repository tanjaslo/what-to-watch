import {Switch, Route, BrowserRouter} from 'react-router-dom';
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
        <Route exact path='/'>
          <MainPage
            filmsCount={filmsCount}
            title={title}
            genre={genre}
            year={year}
          />
        </Route>
        <Route exact path='/login'>
          <UserPage />
        </Route>
        <Route exact path='/mylist'>
          <MyListPage />
        </Route>
        <Route exact path='/films/:id'>
          <MoviePage />
        </Route>
        <Route exact path='/films/:id/review'>
          <AddReviewPage />
        </Route>
        <Route exact path='/player/:id'>
          <PlayerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
