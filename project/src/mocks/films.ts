import type { Film } from '../types/film';

export const films: Film[] = [
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    posterImage: './img/the-grand-budapest-hotel-poster.jpg',
    previewImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: './img/bg-the-grand-budapest-hotel.jpg',
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
    name: 'Aviator',
    posterImage: './img/aviator.jpg',
    previewImage: './img/aviator.jpg',
    backgroundImage: './img/aviator.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cd/City_at_night.webm/City_at_night.webm.360p.vp9.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/cd/City_at_night.webm/City_at_night.webm.360p.vp9.webm',
    description: 'Biopic of billionaire Howard Hughes, starting with his early filmmaking years as owner of R.K.O. Pictures, but mostly focusing on his role in designing and promoting new aircraft. Hughes was a risk-taker spending several fortunes on designing experimental aircraft and eventually founding TWA as a rival to Pan Am airlines owned by his great rival Juan Trippe. When Trippe\'s politico Senator Ralph Owen Brewster accuses Hughes of being a war profiteer, it\'s Hughes who gains the upper hand. Hughes also had many women in his life including a long relationship with Katharine Hepburn. From an early age, however, Hughes was also germophobic and would have severe bouts of mental illness.',
    rating: 5.5,
    scoresCount: 535,
    director: 'Martin Scorsese',
    starring: ['Leonardo DiCaprio', 'Cate Blanchett', 'Kate Beckinsale', 'John C. Reilly'],
    runTime: 234,
    genre: 'Drama',
    released: 2004,
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
    description: 'In the 1930s, the Bohemian Rhapsody is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 5.2,
    scoresCount: 345,
    director: 'Tim Burton',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 56,
    genre: 'Comedy',
    released: 2013,
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Macbeth',
    posterImage: './img/macbeth.jpg',
    previewImage: './img/macbeth.jpg',
    backgroundImage: './img/macbeth.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://fwcdn.pl/video/f/291/123891/macbeth___trailer.vp9.1080p.webm',
    previewVideoLink: 'https://fwcdn.pl/video/f/291/123891/macbeth___trailer.vp9.480p.webm',
    description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
    rating: 7.4,
    scoresCount: 243,
    director: 'Justin Kurzel',
    starring: ['Michael Fassbender', 'Marion Cotillard', 'Paddy Considine', 'Sean Harris'],
    runTime: 165,
    genre: 'Drama',
    released: 2015,
    isFavorite: true,
  },
  {
    id: 5,
    name: 'Fantastic Beasts',
    posterImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://fwcdn.pl/video/f/220/697720/fantastyczne_zwierzeta_i_jak_je_znalezc__zwiastun_glowny_dubbing.vp9.1080p.webm',
    previewVideoLink: 'https://fwcdn.pl/video/f/220/697720/fantastyczne_zwierzeta_i_jak_je_znalezc__zwiastun_glowny_dubbing.vp9.480p.webm',
    description: 'The adventures of writer Newt Scamander in New York\'s secret community of witches and wizards seventy years before Harry Potter reads his book in school.',
    rating: 8.2,
    scoresCount: 555,
    director: 'David Yates',
    starring: ['Eddie Redmayne', 'Eddie Redmayne', 'Samantha Morton', 'Colin Farrell'],
    runTime: 56,
    genre: 'Sci-Fi',
    released: 2016,
    isFavorite: true,
  },
  {
    id: 6,
    name: 'Fantastic Beasts',
    posterImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://fwcdn.pl/video/f/220/697720/fantastyczne_zwierzeta_i_jak_je_znalezc__zwiastun_glowny_dubbing.vp9.1080p.webm',
    previewVideoLink: 'https://fwcdn.pl/video/f/220/697720/fantastyczne_zwierzeta_i_jak_je_znalezc__zwiastun_glowny_dubbing.vp9.480p.webm',
    description: 'The adventures of writer Newt Scamander in New York\'s secret community of witches and wizards seventy years before Harry Potter reads his book in school.',
    rating: 8.2,
    scoresCount: 555,
    director: 'David Yates',
    starring: ['Eddie Redmayne', 'Eddie Redmayne', 'Samantha Morton', 'Colin Farrell'],
    runTime: 56,
    genre: 'Sci-Fi',
    released: 2016,
    isFavorite: true,
  },
  {
    id: 7,
    name: 'Fantastic Beasts',
    posterImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://fwcdn.pl/video/f/220/697720/fantastyczne_zwierzeta_i_jak_je_znalezc__zwiastun_glowny_dubbing.vp9.1080p.webm',
    previewVideoLink: 'https://fwcdn.pl/video/f/220/697720/fantastyczne_zwierzeta_i_jak_je_znalezc__zwiastun_glowny_dubbing.vp9.480p.webm',
    description: 'The adventures of writer Newt Scamander in New York\'s secret community of witches and wizards seventy years before Harry Potter reads his book in school.',
    rating: 8.2,
    scoresCount: 555,
    director: 'David Yates',
    starring: ['Eddie Redmayne', 'Eddie Redmayne', 'Samantha Morton', 'Colin Farrell'],
    runTime: 56,
    genre: 'Sci-Fi',
    released: 2016,
    isFavorite: true,
  },
  {
    id: 8,
    name: 'Fantastic Beasts',
    posterImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://fwcdn.pl/video/f/220/697720/fantastyczne_zwierzeta_i_jak_je_znalezc__zwiastun_glowny_dubbing.vp9.1080p.webm',
    previewVideoLink: 'https://fwcdn.pl/video/f/220/697720/fantastyczne_zwierzeta_i_jak_je_znalezc__zwiastun_glowny_dubbing.vp9.480p.webm',
    description: 'The adventures of writer Newt Scamander in New York\'s secret community of witches and wizards seventy years before Harry Potter reads his book in school.',
    rating: 8.2,
    scoresCount: 555,
    director: 'David Yates',
    starring: ['Eddie Redmayne', 'Eddie Redmayne', 'Samantha Morton', 'Colin Farrell'],
    runTime: 56,
    genre: 'Sci-Fi',
    released: 2016,
    isFavorite: true,
  },
  {
    id: 9,
    name: 'Fantastic Beasts',
    posterImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: './img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://fwcdn.pl/video/f/220/697720/fantastyczne_zwierzeta_i_jak_je_znalezc__zwiastun_glowny_dubbing.vp9.1080p.webm',
    previewVideoLink: 'https://fwcdn.pl/video/f/220/697720/fantastyczne_zwierzeta_i_jak_je_znalezc__zwiastun_glowny_dubbing.vp9.480p.webm',
    description: 'The adventures of writer Newt Scamander in New York\'s secret community of witches and wizards seventy years before Harry Potter reads his book in school.',
    rating: 8.2,
    scoresCount: 555,
    director: 'David Yates',
    starring: ['Eddie Redmayne', 'Eddie Redmayne', 'Samantha Morton', 'Colin Farrell'],
    runTime: 56,
    genre: 'Sci-Fi',
    released: 2016,
    isFavorite: true,
  },
  {
    id: 10,
    name: 'The Grand Budapest Hotel',
    posterImage: './img/the-grand-budapest-hotel-poster.jpg',
    previewImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 5,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
  {
    id: 11,
    name: 'The Grand Budapest Hotel',
    posterImage: './img/the-grand-budapest-hotel-poster.jpg',
    previewImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 5,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
  {
    id: 12,
    name: 'The Grand Budapest Hotel',
    posterImage: './img/the-grand-budapest-hotel-poster.jpg',
    previewImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 5,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
  {
    id: 13,
    name: 'The Grand Budapest Hotel',
    posterImage: './img/the-grand-budapest-hotel-poster.jpg',
    previewImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 5,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
  {
    id: 14,
    name: 'The Grand Budapest Hotel',
    posterImage: './img/the-grand-budapest-hotel-poster.jpg',
    previewImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 5,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
  {
    id: 15,
    name: 'The Grand Budapest Hotel',
    posterImage: './img/the-grand-budapest-hotel-poster.jpg',
    previewImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 5,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
];
