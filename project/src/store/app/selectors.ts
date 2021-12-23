import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';

export const getActiveGenre = (state: State): string => state[NameSpace.app].activeGenre;
export const getStepCount = (state: State): number => state[NameSpace.app].stepCount;
