import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export function useResponsive(query: string, key: Breakpoint | number) {
  const theme = useTheme();
  const isMediaUp = useMediaQuery(theme.breakpoints.up(key));
  const isMediaDown = useMediaQuery(theme.breakpoints.down(key));

  if (query === 'up') {
    return isMediaUp;
  }

  if (query === 'down') {
    return isMediaDown;
  }

  return null;
}
