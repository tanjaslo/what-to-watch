import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  //authStatus: AuthorizationStatus;
};

const mapStateToProps = ({ USER }: State) => ({
  authStatus: USER.authStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;

function PrivateRoute({
  exact,
  path,
  render,
  authStatus,
}: ConnectedComponentProps): JSX.Element {
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

export { PrivateRoute };
export default connector(PrivateRoute);
