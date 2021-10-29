import { Film } from '../../../types/film';
import Catalog from '../../catalog/catalog';
import Logo from '../../logo/logo';
import PageHeader from '../../page-header/page-header';
import PageFooter from '../../page-footer/page-footer';
import UserBlock from '../../user-block/user-block';

type MyListPageProps = {
  films: Film[];
}

function MyListPage({films}: MyListPageProps): JSX.Element {
  const myFilmsList = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <PageHeader title={'MyList'} userPageHead>
        <Logo />
        <UserBlock />
      </PageHeader>
      <Catalog films={myFilmsList} />
      <PageFooter />
    </div>
  );
}

export default MyListPage;
