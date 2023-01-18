import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import Loading from '~/components/Loading';
import { useAuth } from '~/hooks';
import { PATH_AUTH } from '~/routes/path';

export interface BasedGuardProperties {
  children: ReactNode;
}

export default function BasedGuard({ children }: BasedGuardProperties) {
  const { isAuthenticated, isInitialized } = useAuth();

  if (!isInitialized) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to={PATH_AUTH.signIn} replace />;
  }

  return <>{children}</>;
}
