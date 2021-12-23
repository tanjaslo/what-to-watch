import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { fetchReviews } from '../../../store/api-actions';
import { ThunkAppDispatch } from '../../../types/action';
import { State } from '../../../types/state';
import ReviewsList from '../../reviews-list/reviews-list';

const mapStateToProps = ({ REVIEWS }: State) => ({
  reviews: REVIEWS.reviews,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadReviews: (id: string) => {
    dispatch(fetchReviews(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FilmCardReviews({
  reviews,
  loadReviews,
}: PropsFromRedux): JSX.Element {
  const { id }: { id: string } = useParams();

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
