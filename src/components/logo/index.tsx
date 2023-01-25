// @mui
import { Avatar, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { APP_IMAGES } from '~/constants';

import { LogoProps } from './logo.types';

export default function Logo({ disabledLink = false, sx }: LogoProps) {
  const logo = (
    <Stack sx={{ width: 45, height: 45, ...sx }}>
      <Avatar
        src={APP_IMAGES.logo}
        sx={{ width: 'inherit', height: 'inherit' }}
        alt="APP NAME"
      />
    </Stack>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
