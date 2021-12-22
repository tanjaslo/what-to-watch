import { Actions, ActionType } from '../../types/action';
import { AuthorizationStatus } from '../../const';
import { UserReducer } from '../../types/state';

const initialState = {
  authStatus: AuthorizationStatus.Unknown,
  user: null,
};

const userReducer = (state = initialState, action: Actions): UserReducer => {
  const type = action.type;

  switch (type) {
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authStatus: action.payload,
      };
    case ActionType.RequireLogout:
      return {
        ...state,
        authStatus: AuthorizationStatus.NoAuth,
      };
    case ActionType.SetUserData:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export { userReducer };
