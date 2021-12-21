import { Link } from 'react-router-dom';
import { FilmId } from '../../types/film';

type AddReviewLinkProps = {
  id: FilmId;
};

function AddReviewLink({ id }: AddReviewLinkProps): JSX.Element {
  return (
    <Link className="btn film-card__button" to={`/films/${id}/review`}>
      Add review
    </Link>
  );
}

export default AddReviewLink;
