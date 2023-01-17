import axiosInstance from '~/utils/axios';

import { User } from './models';

export const getProfile = (): Promise<Partial<User>> => {
  const url = '/api/users/profile';

  return axiosInstance.get(url);
};
