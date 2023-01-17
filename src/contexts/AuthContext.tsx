import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';

import Loading from '~/components/Loading';
import * as UserService from '~/services/user.service';
import setSession from '~/utils/session';

interface IAuthState {
  isAuthenticated?: boolean;
  isInitialized?: boolean;
  user?: any | null;
}

interface IPayloadAction<T> {
  type: 'INITIALIZE' | 'LOGIN' | 'LOGOUT';
  payload: T;

  [key: string]: any;
}

interface IHandlerState {
  INITIALIZE: (
    state: IAuthState,
    action: IPayloadAction<IAuthState>,
  ) => IAuthState;
  LOGIN: (state: IAuthState, action: IPayloadAction<IAuthState>) => IAuthState;
  LOGOUT: (state: IAuthState) => IAuthState;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers: IHandlerState = {
  INITIALIZE: (
    state: IAuthState,
    action: IPayloadAction<IAuthState>,
  ): IAuthState => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },

  LOGIN: (
    state: IAuthState,
    action: IPayloadAction<IAuthState>,
  ): IAuthState => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },

  LOGOUT: (state: IAuthState): IAuthState => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

// eslint-disable-next-line no-confusing-arrow
const reducer = (state: IAuthState, action: IPayloadAction<IAuthState>) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export interface IAuthProviderProperties {
  children: ReactNode;
}

type ContextType = IAuthState & {
  logout: () => void;
  dispatch: Dispatch<IPayloadAction<IAuthState>>;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const AuthContext = createContext<ContextType>({
  ...initialState,
  logout: () => null,
  dispatch: () => null,
});

function AuthProvider({ children }: IAuthProviderProperties) {
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

          const user = await UserService.getProfile();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    setSession(null, null);
    dispatch({ type: 'LOGOUT', payload: { user: null } });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ ...state, logout, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
