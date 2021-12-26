import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../store/user/selectors';
import { fetchMyList, logout } from '../../store/api-actions';
import { AppRoute } from '../../const';

function UserBlock(): JSX.Element {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const avatarClickHandler = () => {
    dispatch(fetchMyList());
  };

  if (user) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to={AppRoute.MyList}>
            <div className="user-block__avatar" onClick={avatarClickHandler}>
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
          <div className="user-block__link" onClick={logoutHandler}>
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

export default UserBlock;
