import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import Logo from '../../logo/logo';
import PageHeader from '../../page-header/page-header';
import PageFooter from '../../page-footer/page-footer';
import UserBlock from '../../user-block/user-block';

function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <PageHeader userPageHead>
        <Logo />
        <UserBlock />
      </PageHeader>

      <main className="page__main" style={{minHeight: '100vh'}}>
        <div className="page-content" style={{textAlign: 'center'}}>
          <h1>Ooooops!<br /><br />
          This page does not exist :(
          </h1>
          <br />
          <Link
            style={{textDecoration: 'underline'}}
            to={AppRoute.Root}
          >
          Back to main page
          </Link>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}

export default NotFoundPage;
