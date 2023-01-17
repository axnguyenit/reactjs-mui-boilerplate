import axiosInstance from '~/utils/axios';

import { SignInRequest } from './request';
import { SignInResponse } from './response';

export const signIn = (request: SignInRequest): Promise<SignInResponse> => {
  const url = '/api/auth/sign-in';

  return axiosInstance.post(url, request);
};
