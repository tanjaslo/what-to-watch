import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyFilms } from '../../store/films/selectors';
import { fetchMyList } from '../../store/api-actions';
import PageHeader from '../../components/containers/page-header/page-header';
import PageFooter from '../../components/page-footer/page-footer';
import CatalogSection from '../../components/containers/catalog-section/catalog-section';
import FilmsList from '../../components/films-list/films-list';

function MyListPage(): JSX.Element {
  const dispatch = useDispatch();
  const myListFilms = useSelector(getMyFilms);

  useEffect(() => {
    dispatch(fetchMyList());
  }, [dispatch]);

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

export default MyListPage;
