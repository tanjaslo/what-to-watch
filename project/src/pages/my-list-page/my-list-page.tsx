import { useEffect } from 'react';
import { connect, ConnectedProps, useSelector } from 'react-redux';
import { getMyFilms } from '../../store/films/selectors';
import { ThunkAppDispatch } from '../../types/action';
import { fetchMyList } from '../../store/api-actions';
import PageHeader from '../../components/containers/page-header/page-header';
import PageFooter from '../../components/page-footer/page-footer';
import CatalogSection from '../../components/containers/catalog-section/catalog-section';
import FilmsList from '../../components/films-list/films-list';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadMyListFilms: () => {
    dispatch(fetchMyList());
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MyListPage({ loadMyListFilms }: PropsFromRedux): JSX.Element {
  const myListFilms = useSelector(getMyFilms);

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
