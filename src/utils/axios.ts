import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';

// import queryString from 'query-string';
import { HOST_API } from '~/config';

const axiosInstance = axios.create({
  baseURL: HOST_API,
  headers: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'application/json',
  },
  // paramsSerializer: (params: Record<string, any>) => queryString.stringify(params),
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => config);

type AxiosConfig = AxiosRequestConfig & {
  headers: AxiosRequestHeaders & {
    Authorization: string;
  };
};

axiosInstance.interceptors.response.use(async (response: AxiosResponse) => {
  const config = response.config as AxiosConfig;

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
