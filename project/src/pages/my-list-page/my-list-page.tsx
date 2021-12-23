import { connect, ConnectedProps } from 'react-redux';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';
import { fetchMyList } from '../../store/api-actions';
import PageHeader from '../../components/containers/page-header/page-header';
import PageFooter from '../../components/page-footer/page-footer';
import CatalogSection from '../../components/containers/catalog-section/catalog-section';
import FilmsList from '../../components/films-list/films-list';
import { useEffect } from 'react';

const mapStateToProps = ({ FILMS }: State) => ({
  myListFilms: FILMS.myListFilms,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadMyListFilms: () => {
    dispatch(fetchMyList());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MyListPage({
  myListFilms,
  loadMyListFilms,
}: PropsFromRedux): JSX.Element {
  useEffect(() => {
    loadMyListFilms();
  }, [loadMyListFilms]);

  return (
    <div className="user-page">
      <PageHeader title={'MyList'} userPageHead />
      <CatalogSection>
        <FilmsList films={myListFilms} />
      </CatalogSection>
      <PageFooter />
    </div>
  );
}

export { MyListPage };
export default connector(MyListPage);
