import { Link } from 'react-router-dom';

type AddReviewLinkProps = {
  id: number;
}

function AddReviewLink({id}: AddReviewLinkProps): JSX.Element {
  return (
    <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
  );
}

export default AddReviewLink;
