import { useParams } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import NotFoundPage from '../not-found-page/not-found-page';
import FilmCardFullSection from '../../components/containers/film-card-full-section/film-card-full-section';
import FilmCardHeader from '../../components/film-card-header/film-card-header';

const mapStateToProps = ({ films }: State) => ({
  films,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AddReviewPage({ films }: PropsFromRedux): JSX.Element {
  const { id }: { id: string } = useParams();
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

export { AddReviewPage };
export default connector(AddReviewPage);
