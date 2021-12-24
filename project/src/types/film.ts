export type FilmId = number | string;
export type Genre = string;

export type Film = {
  id: FilmId,
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  backgroundColor: string,
  videoLink: string,
  previewVideoLink: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: Genre,
  released: number,
  isFavorite: boolean,
};
