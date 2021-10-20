import { Films } from '../types/films';

const films: Films = [
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    posterImage: './img/the-grand-budapest-hotel-poster.jpg',
    previewImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: './img/the-grand-budapest-hotel-bg.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Avatar',
    posterImage: './img/avatar.jpg',
    previewImage: './img/avatar.jpg',
    backgroundImage: './img/avatar.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 5.1,
    scoresCount: 546,
    director: 'Quentin Tarantino',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 234,
    genre: 'Comedy',
    released: 2002,
    isFavorite: true,
  },
  {
    id: 3,
    name: 'Bohemian Rhapsody',
    posterImage: './img/bohemian-rhapsody.jpg',
    previewImage: './img/bohemian-rhapsody.jpg',
    backgroundImage: './img/bohemian-rhapsody.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 5.2,
    scoresCount: 345,
    director: 'Tim Burton',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 56,
    genre: 'Comedy',
    released: 2013,
    isFavorite: false,
  },
];

export {films};
