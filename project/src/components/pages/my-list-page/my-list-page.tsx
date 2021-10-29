import { Film } from '../../../types/film';
import Catalog from '../../catalog/catalog';
import Footer from '../../footer/footer';
import Logo from '../../logo/logo';
import PageHeader from '../../page-header/page-header';
import UserBlock from '../../user-block/user-block';

type MyListPageProps = {
  films: Film[];
}

function MyListPage({films}: MyListPageProps): JSX.Element {
  const myFilmsList = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <PageHeader userPageHead>
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </PageHeader>
      <Catalog films={myFilmsList} />
      <Footer />
    </div>
  );
}

export default MyListPage;
