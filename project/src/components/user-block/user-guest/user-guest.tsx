import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

function UserGuest(): JSX.Element {
  return (
    <div className="user-block">
      <Link className="user-block__link" to={AppRoute.Login}>
        Sign in
      </Link>
    </div>
  );
}

export default UserGuest;
