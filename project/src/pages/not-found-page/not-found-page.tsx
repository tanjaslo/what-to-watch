import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import PageHeader from '../../components/ui/page-header/page-header';
import PageFooter from '../../components/ui/page-footer/page-footer';

function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <PageHeader userPageHead />
      <main className="page__main" style={{ minHeight: '100vh' }}>
        <div className="page-content" style={{ textAlign: 'center' }}>
          <h1>
            Ooooops!
            <br />
            <br />
            This page does not exist :(
          </h1>
          <br />
          <Link style={{ textDecoration: 'underline' }} to={AppRoute.Root}>
            Back to main page
          </Link>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}

export default NotFoundPage;
