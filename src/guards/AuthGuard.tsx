import { ReactNode, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Loading from '~/components/Loading';
import { useAuth } from '~/hooks';
import SignIn from '~/modules/auth/sign-in';
interface IAuthGuardProperties {
  children: ReactNode;
}

export default function AuthGuard({ children }: IAuthGuardProperties) {
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

    return <SignIn />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation('');

    return <Navigate to={requestedLocation} />;
  }

  if (!user?.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
