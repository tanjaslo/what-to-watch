import { useParams } from 'react-router-dom';
import { Film } from '../../../types/film';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import Logo from '../../logo/logo';
import ReviewForm from '../../add-review-form/add-review-form';
import UserBlock from '../../user-block/user-block';
import NotFoundPage from '../not-found-page/not-found-page';
import FilmCardPoster from '../../film-card-poster/film-card-poster';
import PageHeader from '../../page-header/page-header';

type AddReviewPageProps = {
  films: Film[];
}

function AddReviewPage({films}: AddReviewPageProps): JSX.Element {
  const {id}: {id: string} = useParams();
  const currentFilm = films.find((film) => film.id === +id);

  if (currentFilm) {
    const {name, previewImage} = currentFilm;

    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img
              src={previewImage}
              alt={name}
            />
          </div>

          <PageHeader>
            <Logo />
            <Breadcrumbs id={id} name={name} />
            <UserBlock />
          </PageHeader>

          <FilmCardPoster film={currentFilm} small />

        </div>

        <ReviewForm />

      </section>
    );
  }
  return <NotFoundPage />;
}

export default AddReviewPage;
