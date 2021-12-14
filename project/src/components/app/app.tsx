import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';
import { State } from '../../types/state';
import { AppRoute } from '../../const';
import browserHistory from '../../browser-history';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import MainPage from '../../pages/main-page/main-page';
import FilmPage from '../../pages/film-page/film-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PlayerPage from '../../pages/player-page/player-page';
import UserPage from '../../pages/user-page/user-page';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';

const mapStateToProps = ({ isDataLoaded }: State) => ({
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({ isDataLoaded }: PropsFromRedux): JSX.Element {
  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.Login}>
          <UserPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListPage />}
        />
        <Route exact path={AppRoute.Movie}>
          <FilmPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewPage />}
        />
        <Route exact path={AppRoute.Player}>
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { App };
export default connector(App);
