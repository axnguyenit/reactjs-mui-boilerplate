import { Icon } from '@iconify/react';
import { Box } from '@mui/material';

import { IconifyProps } from './iconify.types';

export default function Iconify({ icon, sx, ...other }: IconifyProps) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
