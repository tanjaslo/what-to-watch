import PageHeader from '../../components/containers/page-header/page-header';
import PageFooter from '../../components/page-footer/page-footer';
import CatalogSection from '../../components/containers/catalog-section/catalog-section';
import FilmsList from '../../components/films-list/films-list';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = ({ films }: State) => ({
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MyListPage({ films }: PropsFromRedux): JSX.Element {
  const myFilmsList = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <PageHeader title={'MyList'} userPageHead />
      <CatalogSection>
        <FilmsList films={myFilmsList} />
      </CatalogSection>
      <PageFooter />
    </div>
  );
}

export { MyListPage };
export default connector(MyListPage);
