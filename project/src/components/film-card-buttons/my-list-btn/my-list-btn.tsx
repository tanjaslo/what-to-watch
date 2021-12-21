import { connect, ConnectedProps } from 'react-redux';
import { ThunkAppDispatch } from '../../../types/action';
import { FilmId } from '../../../types/film';
import { setFilmStatus } from '../../../store/api-actions';
import { FavoriteStatus } from '../../../const';

type MyListBtnProps = {
  id: FilmId;
  isFavorite: boolean;
};

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  toggleMyListBtn(id: FilmId, status: FavoriteStatus) {
    dispatch(setFilmStatus(id, status));
  },
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = MyListBtnProps & PropsFromRedux;

function MyListBtn({
  id,
  isFavorite,
  toggleMyListBtn,
}: ConnectedComponentProps): JSX.Element {
  const onBtnClickHandler = () => {
    toggleMyListBtn(
      id,
      isFavorite ? FavoriteStatus.False : FavoriteStatus.True,
    );
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={onBtnClickHandler}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {isFavorite ? <use xlinkHref="#in-list" /> : <use xlinkHref="#add" />}
      </svg>
      <span>My list</span>
    </button>
  );
}

export default connector(MyListBtn);
export { MyListBtn };
