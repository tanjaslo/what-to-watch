import type { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Kate Muir',
    },
    rating: 8.9,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    date: '2019-05-08T14:13:56.569Z',
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Nick Petrenko',
    },
    rating: 5,
    comment: 'Not the best, but ok.',
    date: '2019-04-08T10:10:56.569Z',
  },
  {
    id: 3,
    user: {
      id: 3,
      name: 'Mary Moon',
    },
    rating: 9.9,
    comment: 'Must see! It’s as good as you’d expect from this cast and crew, which is saying something.',
    date: '2019-03-08T10:10:56.569Z',
  },
  {
    id: 4,
    user: {
      id: 4,
      name: 'Barry Blue',
    },
    rating: 6,
    comment: 'While it can feel rather sterile, the film is never less than entrancing... an elegant, cinematically visionary take on a sci-fi classic.',
    date: '2019-02-08T10:10:56.569Z',
  },
  {
    id: 5,
    user: {
      id: 5,
      name: 'Rendy Jones',
    },
    rating: 8.5,
    comment: 'It remains a first-rate thriller based on one of Walter Mosley`s mystery novels, packed with sharp observations and violent scenes.',
    date: '2019-01-08T10:10:56.569Z',
  },
];
