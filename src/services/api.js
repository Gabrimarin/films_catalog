import Axios from 'axios';

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
}
