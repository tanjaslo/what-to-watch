import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { rootReducer } from './store/root-reducer';
import { requireAuthorization } from './store/action';
import { checkAuth, fetchFilms } from './store/api-actions';
import { redirect } from './store/middlewares/redirect';
import { createAPI } from './services/api';
import { AuthorizationStatus } from './const';
import App from './components/app/app';

const api = createAPI(() =>
  store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchFilms());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
