import { AppRole } from './models';
import { SignInRequest } from './request';
import { SignInResponse } from './response';

export const authService = {
  signIn: (_: SignInRequest): Promise<SignInResponse> =>
    Promise.resolve<SignInResponse>({
      user: {
        id: 'uid',
        email: 'axnguyen.it@gmail.com',
        fullName: 'Ax Nguyen',
        role: AppRole.SuperAdmin,
      },
      accessToken: 'accessToken',
    }),
};
