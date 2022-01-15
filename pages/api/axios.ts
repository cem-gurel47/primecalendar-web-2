/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios';

const AxiosInstance = axios.create();

AxiosInstance.interceptors.request.use(
  config => {
    //@ts-ignore
    config.headers['Content-Type'] = 'application/json';
    //@ts-ignore
    config.headers['Accept'] = 'application/json';
    //@ts-ignore
    config.headers['Access-Control-Allow-Origin'] = 'http://localhost:4000';
    //@ts-ignore
    config.headers['Access-Control-Allow-Credentials'] = 'true';

    return config;
  },
  function (error) {
    console.log('error on creating axios instance ', error);
  }
);

export default AxiosInstance;

// export const baseURL = 'https://primecalendar-api.herokuapp.com/';

export const baseURL = 'http://localhost:4000/';
