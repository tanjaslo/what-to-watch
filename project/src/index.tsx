import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { requireAuthorization } from './store/action';
import { checkAuth, fetchFilms } from './store/api-actions';
import { redirect } from './store/middlewares/redirect';
import { createAPI } from './services/api';
import { ThunkAppDispatch } from './types/action';
import { AuthorizationStatus } from './const';
import App from './components/app/app';

const api = createAPI(() =>
  store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuth());
(store.dispatch as ThunkAppDispatch)(fetchFilms());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
