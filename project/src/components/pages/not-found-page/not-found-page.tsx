import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import Footer from '../../footer/footer';
import Logo from '../../logo/logo';

function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>

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

      <Footer />
    </div>
  );
}

export default NotFoundPage;
