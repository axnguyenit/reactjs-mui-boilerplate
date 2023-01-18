import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '~/hooks';

export interface GuestGuardProperties {
  children: ReactNode;
}

export default function GuestGuard({ children }: IGuestGuardProperties) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
