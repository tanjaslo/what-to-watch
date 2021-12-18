import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { FavoriteStatus } from '../../const';
import { setMyList } from '../../store/api-actions';
import { State } from '../../types/state';
import AddReviewLink from '../add-review-link/add-review-link';

type FilmCardButtonsProps = {
  isPromo?: boolean;
};

const mapStateToProps = ({ currentFilm, promoFilm }: State) => ({
  currentFilm,
  promoFilm,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmCardButtonsProps;

function FilmCardButtons({
  isPromo,
  currentFilm,
  promoFilm,
}: ConnectedComponentProps): JSX.Element {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();

  const currentId = id || promoFilm.id?.toString();

  const currentFavoriteStatus = currentId
    ? currentFilm.isFavorite
    : promoFilm.isFavorite;

  const onBtnClickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(
      setMyList(
        currentId,
        currentFavoriteStatus ? FavoriteStatus.False : FavoriteStatus.True,
      ),
    );
  };

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={onBtnClickHandler}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
      {!isPromo && <AddReviewLink id={+id} />}
    </div>
  );
}

export { FilmCardButtons };
export default connector(FilmCardButtons);
