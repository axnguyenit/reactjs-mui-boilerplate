/* eslint-disable @typescript-eslint/naming-convention */
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { BasedGuard, GuestGuard } from '~/guards';
import { MainLayout } from '~/layouts';

const SignIn = lazy(() => import('./auth/sign-in'));
const SignUp = lazy(() => import('./auth/sign-up'));
const UserList = lazy(() => import('./users/user-list'));
const Home = lazy(() => import('./home'));

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          element: (
            <BasedGuard>
              <Home />
            </BasedGuard>
          ),
          index: true,
        },
        {
          path: 'user-list',
          element: (
            <BasedGuard>
              <UserList />
            </BasedGuard>
          ),
        },
      ],
    },
    {
      path: 'auth',
      children: [
        {
          path: 'sign-in',
          element: (
            <GuestGuard>
              <SignIn />
            </GuestGuard>
          ),
        },
        {
          path: 'sign-up',
          element: (
            <GuestGuard>
              <SignUp />
            </GuestGuard>
          ),
        },
      ],
    },
  ]);
}
