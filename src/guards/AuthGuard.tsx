import { ReactNode, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Loading from '~/components/Loading';
import { useAuth } from '~/hooks';
import { PATH_AUTH } from '~/routes/path';
import { AppRole } from '~/services/models';
interface AuthGuardProperties {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProperties) {
  const { user, isAuthenticated, isInitialized } = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string>('');

  if (!isInitialized) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }

    <Navigate to={PATH_AUTH.signIn} replace />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation('');

    return <Navigate to={requestedLocation} />;
  }

  if (![AppRole.SuperAdmin, AppRole.Admin].includes(user?.role as AppRole)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
