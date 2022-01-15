import axios, { baseURL } from './axios';

const endpoint = `${baseURL}user/`;

class UserService {
  async login(email: string, password: string) {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(`${endpoint}login`, {
        email,
        password
      });
      return response.data;
    } catch (error) {
      //@ts-ignore
      throw error.response.data;
    }
  }

  async register(first_name: string, last_name: string, email: string, password: string) {
    try {
      const response = await axios.post(`${endpoint}register`, {
        first_name,
        last_name,
        email,
        password
      });

      return response.data;
    } catch (error) {
      //@ts-ignore
      throw error.response.data;
    }
  }

  async logout() {
    try {
      await axios.post(`${endpoint}register`);
      // return response.data;
    } catch (error) {
      //@ts-ignore
      throw error.response.data;
    }
  }
}

export default new UserService();
