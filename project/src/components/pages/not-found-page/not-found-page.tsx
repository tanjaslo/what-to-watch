import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../const';

function NotFoundPage(): JSX.Element {
  return (
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
  );
}

export default NotFoundPage;
