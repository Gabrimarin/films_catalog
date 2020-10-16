import Axios from 'axios';
import {getGeneralRoute} from '../constants';

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
}
