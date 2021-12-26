import { useDispatch } from 'react-redux';
import { incrementStep } from '../../store/action';
import { STEP_COUNT } from '../../const';

function ShowMore(): JSX.Element {
  const dispatch = useDispatch();

  const showMoreBtnClickHandler = () => {
    dispatch(incrementStep(STEP_COUNT));
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={showMoreBtnClickHandler}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
