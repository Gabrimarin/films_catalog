const AUTH_KEY = '1119a5630b568c4834abd1b6735244de';
const BASE_ROUTE = 'https://api.themoviedb.org/3';

export const getGeneralRoute = (route) => {
  return `${BASE_ROUTE}/${route}?api_key=${AUTH_KEY}`;
};

export const GET_GENRES = getGeneralRoute('genre/movie/list');

export const GET_OF_GENRE = (genre, page) =>
  getGeneralRoute('discover/movie') +
  `&page=${page}&include_adult=false&with_genres=${genre}`;

export const GET_POSTER_PATH = (path) =>
  'https://image.tmdb.org/t/p/original' + path;

export const GET_MOVIE_PATH = (path) =>
  'https://image.tmdb.org/t/p/original' + path;

export const GET_MOVIE_BY_TITLE = (queryTitle, page) =>
  getGeneralRoute('search/movie') + `&query=${queryTitle}&page=${page}`;
