import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';
import qs from 'qs';

// import queryString from 'query-string';
import { API_URL } from '~/config';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    serialize: (params: Record<string, any>) =>
      qs.stringify(params, { arrayFormat: 'comma' }),
    indexes: null,
  },
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => config);

type AxiosConfig = AxiosRequestConfig & {
  headers: AxiosRequestHeaders & {
    Authorization: string;
  };
};

axiosInstance.interceptors.response.use(async (response: AxiosResponse) => {
  const config = <AxiosConfig>response.config;

  // handle access token expired
  if (response.data.code && response.data.code === 401) {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
      return;
    }

    // get new access token from refresh token
    try {
      // const { accessToken } = await userApi.refreshToken({ refreshToken });

      // save new access token and config axios authorization headers
      // setSession(accessToken, refreshToken);
      // config.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(config);
    } catch {
      // ...
    }
  }

  return response.data;
});

export default axiosInstance;
