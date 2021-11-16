import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { reducer } from './store/reducer';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { films } from '../src/mocks/films';
import { reviews } from '../src/mocks/reviews';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films = {films}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
