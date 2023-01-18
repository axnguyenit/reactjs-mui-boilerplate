import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';

import Loading from '~/components/Loading';
import { userService } from '~/services';
import { User } from '~/services/models';
import setSession from '~/utils/session';

interface AuthState {
  isAuthenticated?: boolean;
  isInitialized?: boolean;
  user?: User | null;
}

interface PayloadAction<T> {
  type: 'INITIALIZE' | 'SIGN_IN' | 'SIGN_OUT';
  payload: T;

  [key: string]: any;
}

interface HandlerState {
  INITIALIZE: (state: AuthState, action: PayloadAction<AuthState>) => AuthState;
  SIGN_IN: (state: AuthState, action: PayloadAction<AuthState>) => AuthState;
  SIGN_OUT: (state: AuthState) => AuthState;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers: HandlerState = {
  INITIALIZE: (
    state: AuthState,
    action: PayloadAction<AuthState>,
  ): AuthState => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },

  SIGN_IN: (state: AuthState, action: PayloadAction<AuthState>): AuthState => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },

  SIGN_OUT: (state: AuthState): AuthState => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

// eslint-disable-next-line no-confusing-arrow
const reducer = (state: AuthState, action: PayloadAction<AuthState>) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export interface AuthProviderProperties {
  children: ReactNode;
}

type ContextType = AuthState & {
  signOut: () => void;
  dispatch: Dispatch<PayloadAction<AuthState>>;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const AuthContext = createContext<ContextType>({
  ...initialState,
  signOut: () => null,
  dispatch: () => null,
});

function AuthProvider({ children }: AuthProviderProperties) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      setIsLoading(true);

      try {
        const accessToken = window.localStorage.getItem('accessToken');
        const refreshToken = window.localStorage.getItem('refreshToken');

        if (accessToken) {
          setSession(accessToken, refreshToken);

          const user = await userService.getProfile();

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch {
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }

      setIsLoading(false);
    };

    initialize();
  }, []);

  const signOut = () => {
    setSession(null, null);
    dispatch({ type: 'SIGN_OUT', payload: { user: null } });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ ...state, signOut, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
