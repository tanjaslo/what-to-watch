import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
