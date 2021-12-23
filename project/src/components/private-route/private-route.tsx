import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../store/user/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
};

function PrivateRoute({ exact, path, render }: PrivateRouteProps): JSX.Element {
  const authStatus = useSelector(getAuthStatus);
  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        authStatus === AuthorizationStatus.Auth ? (
          render()
        ) : (
          <Redirect to={AppRoute.Login} />
        )
      }
    />
  );
}

export default PrivateRoute;
