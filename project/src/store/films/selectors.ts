import { Film } from '../../types/film';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getDataLoadingStatus = (state: State): boolean => state[NameSpace.films].isDataLoaded;
export const getFilms = (state: State): Film[] => state[NameSpace.films].films;
export const getMyFilms = (state: State): Film[] => state[NameSpace.films].myListFilms;
export const getSimilarFilms = (state: State): Film[] => state[NameSpace.films].similarFilms;
export const getCurrentFilm = (state: State): Film => state[NameSpace.films].currentFilm;
export const getpromoFilm = (state: State): Film => state[NameSpace.films].promoFilm;
