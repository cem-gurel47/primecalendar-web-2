/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios';

const AxiosInstance = axios.create();

AxiosInstance.interceptors.request.use(
  config => {
    const user = localStorage.getItem('user');
    //@ts-ignore
    config.headers['Content-Type'] = 'application/json';
    //@ts-ignore
    config.headers['Access-Control-Allow-Origin'] = '*';
    //@ts-ignore
    config.headers['Access-Control-Allow-Credentials'] = 'true';

    if (user) {
      const parsedUser = JSON.parse(user);
      //@ts-ignore
      config.headers['x-access-token'] = parsedUser.token;
    }

    return config;
  },
  function (error) {
    console.log('error on creating axios instance ', error);
  }
);

export default AxiosInstance;

export const baseURL = 'https://primecalendar-api.herokuapp.com/';
