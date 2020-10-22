import {GET_POSTER_PATH} from '../constants/routes';
import RestServices from '../services/api';
const Rest = new RestServices();

export const processApiGenreData = async (apiResponse) => {
  if (apiResponse.has_error) {
    return {has_error: true};
  }
  const posterṔaths = [];
  const genresList = [];
  for (const [_, genre] of apiResponse.data.entries()) {
    const moviesResponse = await Rest.getMovieOfGenre(genre.id, 1);
    if (moviesResponse.has_error) {
      return {
        has_error: true,
      };
    }
    const filmsOfGenre = moviesResponse.data;
    let auxObj = {...genre};
    let i = 0;
    while (posterṔaths.indexOf(filmsOfGenre[i].poster_path) !== -1) {
      i += 1;
    }
    auxObj.posterPath = GET_POSTER_PATH(filmsOfGenre[i].poster_path);
    posterṔaths.push(filmsOfGenre[i].poster_path);
    genresList.push(auxObj);
  }
  return genresList;
};
