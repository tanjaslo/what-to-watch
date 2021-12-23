import { connect, ConnectedProps, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../store/user/selectors';
import { ThunkAppDispatch } from '../../types/action';
import { fetchMyList, logout } from '../../store/api-actions';
import { AppRoute } from '../../const';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onAvatarClick() {
    dispatch(fetchMyList());
  },
  onLogOut() {
    dispatch(logout());
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function UserBlock({ onAvatarClick, onLogOut }: PropsFromRedux): JSX.Element {
  const user = useSelector(getUser);

  const handleLogout = () => {
    onLogOut();
  };

  const handleAvatarClick = () => {
    onAvatarClick();
  };

  if (user) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to={AppRoute.MyList}>
            <div className="user-block__avatar" onClick={handleAvatarClick}>
              <img
                src={user.avatarUrl}
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </Link>
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
