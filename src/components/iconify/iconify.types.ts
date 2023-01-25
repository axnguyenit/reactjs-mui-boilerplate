import { IconifyIcon } from '@iconify/react';
import { SxProps, Theme } from '@mui/material';

export interface IconifyProps {
  icon: IconifyIcon | string;
  sx?: SxProps<Theme>;

  [key: string]: any;
}
