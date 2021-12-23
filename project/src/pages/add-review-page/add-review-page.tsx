import { useSelector } from 'react-redux';
import { getCurrentFilm } from '../../store/films/selectors';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import NotFoundPage from '../not-found-page/not-found-page';
import FilmCardFullSection from '../../components/containers/film-card-full-section/film-card-full-section';
import FilmCardHeader from '../../components/film-card-header/film-card-header';

function AddReviewPage(): JSX.Element {
  const currentFilm = useSelector(getCurrentFilm);

  if (currentFilm) {
    return (
      <FilmCardFullSection>
        <FilmCardHeader film={currentFilm} />
        <AddReviewForm />
      </FilmCardFullSection>
    );
  }
  return <NotFoundPage />;
}

export default AddReviewPage;
