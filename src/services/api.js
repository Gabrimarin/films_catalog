import Axios from 'axios';
import {getGeneralRoute} from '../constants';
import {GET_OF_GENRE, GET_GENRES, GET_MOVIE_BY_TITLE} from '../constants/routes';

export default class RestServices {
  async get(route) {
    try {
      const response = await Axios.get(route);
      return response;
    } catch (error) {
      return {
        has_error: true,
        error: error.status_message,
      };
    }
  }

  async getMovie(id) {
    try {
      const response = await Axios.get(getGeneralRoute(`movie/${id}`));
      return response.data;
    } catch (error) {
      return {
        has_error: true,
        error: error.status_message,
      };
    }
  }

  async getGenresList() {
    try {
      const response = await Axios.get(GET_GENRES);
      return {
        has_error: false,
        data: response.data.genres,
      };
    } catch (error) {
      return {
        has_error: true,
        error: error.message,
      };
    }
  }

  async getMovieOfGenre(genreId, page) {
    try {
      const response = await Axios.get(GET_OF_GENRE(genreId, page));
      return {
        has_error: false,
        data: response.data.results,
      };
    } catch (error) {
      return {
        has_error: true,
        error: error.message,
      };
    }
  }

  async getMoviesByTitle(title, page) {
    try {
      const response = await Axios.get(GET_MOVIE_BY_TITLE(title, page));
      return {
        has_error: false,
        data: response.data.results,
      };
    } catch (error) {
      return {
        has_error: true,
        error: error.message,
      };
    }
  }
}
