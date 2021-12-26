import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../../store/reviews/selectors';
import { fetchReviews } from '../../../store/api-actions';
import ReviewsList from '../../reviews-list/reviews-list';

function FilmCardReviews(): JSX.Element {
  const dispatch = useDispatch();
  const { id }: { id: string } = useParams();
  const reviews = useSelector(getReviews);

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, [dispatch, id]);

  return (
    <div className="film-card__reviews film-card__row">
      <ReviewsList reviews={reviews} />
    </div>
  );
}

export default FilmCardReviews;
