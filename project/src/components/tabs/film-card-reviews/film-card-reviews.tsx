import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect, ConnectedProps, useSelector } from 'react-redux';
import { getReviews } from '../../../store/reviews/selectors';
import { fetchReviews } from '../../../store/api-actions';
import { ThunkAppDispatch } from '../../../types/action';
import ReviewsList from '../../reviews-list/reviews-list';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadReviews: (id: string) => {
    dispatch(fetchReviews(id));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FilmCardReviews({ loadReviews }: PropsFromRedux): JSX.Element {
  const { id }: { id: string } = useParams();
  const reviews = useSelector(getReviews);

  useEffect(() => {
    loadReviews(id);
  }, [loadReviews, id]);

  return (
    <div className="film-card__reviews film-card__row">
      <ReviewsList reviews={reviews} />
    </div>
  );
}

export { FilmCardReviews };
export default connector(FilmCardReviews);
