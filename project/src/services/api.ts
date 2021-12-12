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
        return onUnauthorized();
      }

      return Promise.reject(error); // можно обработать ошибку, добавить тост и т.д.
    },
  );

  // 4** считается ошибкой по умолчанию в axios, в отличие от fetch, но можно сконфигурировать
  // здесь можем реализовать доп. логирование, добавить заголовки и т.д.
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const currentToken = getToken();

      if (currentToken) {
        config.headers['x-token'] = currentToken; // добавляем в заголовке конфига наш токен из localStorage
      }

      return config;
    },
  );

  return api;
};
