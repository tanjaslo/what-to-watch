import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { AppRoute } from '../../const';
import { ThunkAppDispatch } from '../../types/action';
import { logout } from '../../store/api-actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ user }: State) => ({
  user,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogOut() {
    dispatch(logout());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function UserBlock({ user, onLogOut }: PropsFromRedux): JSX.Element {
  const handleLogout = () => {
    onLogOut();
  };

  if (user) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              src={user.avatarUrl}
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </li>
        <li className="user-block__item">
          <div className="user-block__link" onClick={handleLogout}>
            Sign out
          </div>
        </li>
      </ul>
    );
  } else {
    return (
      <div className="user-block">
        <Link className="user-block__link" to={AppRoute.Login}>
          Sign in
        </Link>
      </div>
    );
  }
}

export { UserBlock };
export default connector(UserBlock);
