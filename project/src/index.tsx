import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  FILMS_COUNT: 20,
};

const PromoFilm = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmsCount = {Setting.FILMS_COUNT}
      title={PromoFilm.TITLE}
      genre={PromoFilm.GENRE}
      year={PromoFilm.YEAR}
    />
  </React.StrictMode>,
  document.getElementById('root'));
