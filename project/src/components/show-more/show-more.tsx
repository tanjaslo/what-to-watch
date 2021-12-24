import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { incrementStep } from '../../store/action';
import { STEP_COUNT } from '../../const';

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrementStep(stepCount: number) {
    dispatch(incrementStep(stepCount));
  },
});

const connector = connect(null, mapDispatchToProps);

function ShowMore({ onIncrementStep }: PropsFromRedux): JSX.Element {
  const onShowMoreBtnClick = () => {
    onIncrementStep(STEP_COUNT);
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreBtnClick}
      >
        Show more
      </button>
    </div>
  );
}

export { ShowMore };
export default connector(ShowMore);
