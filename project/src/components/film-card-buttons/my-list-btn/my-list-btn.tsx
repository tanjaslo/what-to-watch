import { FilmId } from '../../../types/film';
import { setFilmStatus } from '../../../store/api-actions';
import { FavoriteStatus, MyListButtonType } from '../../../const';
import { useDispatch } from 'react-redux';

type MyListBtnProps = {
  id: FilmId;
  isFavorite: boolean;
};

function MyListBtn({ id, isFavorite }: MyListBtnProps): JSX.Element {
  const dispatch = useDispatch();

  const myListBtnClickHandler = () => {
    const status = isFavorite ? FavoriteStatus.False : FavoriteStatus.True;
    dispatch(setFilmStatus(id, status));
  };

  const myListBtn = isFavorite
    ? MyListButtonType.IN_LIST
    : MyListButtonType.ADD;
  const { imgWidth, imgHeight, viewBox, use } = myListBtn;

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={myListBtnClickHandler}
    >
      <svg viewBox={viewBox} width={imgWidth} height={imgHeight}>
        <use xlinkHref={use} />
      </svg>
      <span>My list</span>
    </button>
  );
}

export default MyListBtn;
