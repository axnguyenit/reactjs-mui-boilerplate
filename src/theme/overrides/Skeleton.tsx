import { Theme, ThemeOptions } from '@mui/material';

// ----------------------------------------------------------------------

export default function Skeleton(theme: Theme): ThemeOptions['components'] {
  return {
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },

      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  };
}
