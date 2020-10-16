const AUTH_KEY = '1119a5630b568c4834abd1b6735244de';
const BASE_ROUTE = 'https://api.themoviedb.org/3';
const getGeneralRoute = (route) => {
  return `${BASE_ROUTE}/${route}?api_key=${AUTH_KEY}`;
};

export const GET_GENRES = getGeneralRoute('genre/movie/list');

export const GET_BY_GENRES = (genres, page) =>
  getGeneralRoute('discover/movie') +
  `&page=${page}&include_adult=false&with_genres=${genres}`;

export const GET_POSTER_PATH = (path) =>
  'https://image.tmdb.org/t/p/original' + path;
