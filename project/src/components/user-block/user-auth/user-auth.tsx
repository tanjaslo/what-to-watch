import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

function UserAuth(): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link className="user-block__link" to={AppRoute.Root}>
          Sign out
        </Link>
      </li>
    </ul>
  );
}

export default UserAuth;
