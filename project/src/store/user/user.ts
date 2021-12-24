import { createReducer } from '@reduxjs/toolkit';
import { UserReducer } from '../../types/state';
import { requireAuthorization, requireLogout, setUserData } from '../action';
import { AuthorizationStatus } from '../../const';

const initialState: UserReducer = {
  authStatus: AuthorizationStatus.Unknown,
  user: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    });
});

export { userReducer };
