/* eslint-disable @typescript-eslint/naming-convention */
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import { MainLayout } from '~/layouts';

const SignIn = lazy(() => import('./auth/sign-in'));
const SignUp = lazy(() => import('./auth/sign-up'));

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: 'sign-in',
          element: <SignIn />,
        },
        {
          path: 'sign-up',
          element: <SignUp />,
        },
      ],
    },
  ]);
}
