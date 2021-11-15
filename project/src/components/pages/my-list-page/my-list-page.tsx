import type { Film } from '../../../types/film';
import Logo from '../../logo/logo';
import PageHeader from '../../containers/page-header/page-header';
import PageFooter from '../../page-footer/page-footer';
import UserBlock from '../../user-block/user-block';
import CatalogSection from '../../containers/catalog-section/catalog-section';
import FilmsList from '../../films-list/films-list';

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
      <CatalogSection>
        <FilmsList films={myFilmsList} />
      </CatalogSection>
      <PageFooter />
    </div>
  );
}

export default MyListPage;
