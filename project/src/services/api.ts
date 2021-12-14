import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { getToken } from './token';
import { BACKEND_URL, REQUEST_TIMEOUT } from '../const';

enum HttpCode {
  Unauthorized = 401,
}

type UnauthorizedCallback = () => void;

export const createAPI = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const { response } = error;

      if (response?.status === HttpCode.Unauthorized) {
        onUnauthorized();
      }

      return Promise.reject(error); // можно обработать ошибку, добавить тост и т.д.
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const currentToken = getToken();

      if (currentToken) {
        config.headers['x-token'] = currentToken;
      }

      return config;
    },
  );

  return api;
};
