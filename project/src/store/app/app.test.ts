import { DEFAULT_GENRE, INITIAL_FILMS_COUNT, STEP_COUNT } from '../../const';
import { changeGenre, incrementStep, resetStepCount } from '../action';
import { appReducer } from './app';

const state = { activeGenre: DEFAULT_GENRE, stepCount: INITIAL_FILMS_COUNT };
describe('Reducer: appReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(appReducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  it('should change activeGenre to Comedy', () => {
    expect(appReducer(state, changeGenre('Comedy')))
      .toEqual({ ...state, activeGenre: 'Comedy' });
  });

  it('should increment stepCount', () => {
    expect(appReducer(state, incrementStep))
      .toEqual({ ...state, stepCount: state.stepCount + STEP_COUNT });
  });

  it('should reset stepCount', () => {
    expect(appReducer({ ...state, stepCount: INITIAL_FILMS_COUNT + STEP_COUNT }, resetStepCount))
      .toEqual(state);
  });
});
