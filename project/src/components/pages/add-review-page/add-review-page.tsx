import { useParams } from 'react-router-dom';
import { Film } from '../../../types/film';
import AddReviewForm from '../../add-review-form/add-review-form';
import NotFoundPage from '../not-found-page/not-found-page';
import FilmCardFullSection from '../../film-card-full-section/film-card-full-section';
import FilmCardHeader from '../../film-card-header/film-card-header';

type AddReviewPageProps = {
  films: Film[];
}

function AddReviewPage({films}: AddReviewPageProps): JSX.Element {
  const {id}: {id: string} = useParams();
  const currentFilm = films.find((film) => film.id === +id);

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
