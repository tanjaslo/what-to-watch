import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main">
        <div className="page-content">
          <h1>Ooooops!<br /><br />
          This page does not exist :(
          </h1>
          <Link
            style={{textDecoration: 'underline'}}
            to={AppRoutes.Root}
          >
          Back to main page
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
