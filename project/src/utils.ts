import dayjs from 'dayjs';
import { DEFAULT_GENRE } from './const';
import { Film } from './types/film';

export const formattedDate = (date: string): string =>
  dayjs(date).format('YYYY-MM-DD');

export const humanizedDate = (date: string): string =>
  dayjs(date).format('MMMM DD, YYYY');

export const getDurationInMinutes = (runTime: number): string => {
  if (runTime > 60) {
    return `${Math.floor(runTime / 60)}h ${runTime % 60}m`;
  }
  return `${runTime} minutes`;
};

export const getUniqueGenres = (films: Film[]): string[] => {
  const genres = films.map((film) => film.genre);
  return [...new Set(genres)];
};

export const getGenresList =
  (defaultGenre: string, genres: string[]): string[] => (
    [defaultGenre, ...genres]);

export const getFilteredFilms = (films: Film[], activeGenre: string): Film[] =>
  activeGenre === DEFAULT_GENRE ? films : getFilmsByGenre(films, activeGenre);

export const getFilmsByGenre =
  (films: Film[], activeGenre: string): Film[] =>
    films.filter((film) => film.genre === activeGenre);
