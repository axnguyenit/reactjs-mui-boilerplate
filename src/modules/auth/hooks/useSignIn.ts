import { useAuth } from '~/hooks';
import { authService } from '~/services';
import { SignInRequest } from '~/services/request';
import setSession from '~/utils/session';

export default function useSignIn() {
  const { dispatch } = useAuth();

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

  return { signIn };
}
