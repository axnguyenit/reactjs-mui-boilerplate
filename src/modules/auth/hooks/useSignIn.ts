import { useAuth } from '~/hooks';
import { authService, SignInRequest } from '~/services';
import setSession from '~/utils/session';

import { useSignInValidation } from './useSignInValidation';

export function useSignIn() {
  const { dispatch } = useAuth();
  const { formMethods } = useSignInValidation();

  const signIn = async (data: SignInRequest) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await authService.signIn(data);
      setSession(response.accessToken, null);
      dispatch({
        type: 'SIGN_IN',
        payload: {
          user: response.user,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { signIn, formMethods };
}
