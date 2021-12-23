import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { AuthorizationStatus } from '../../const';
import { User } from '../../types/user';

export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authStatus;
export const getUser = (state: State): User | null => state[NameSpace.user].user;
