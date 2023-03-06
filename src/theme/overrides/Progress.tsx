import { Theme, ThemeOptions } from '@mui/material';

// ----------------------------------------------------------------------

export default function Progress(theme: Theme): ThemeOptions['components'] {
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          overflow: 'hidden',
        },
        bar: {
          borderRadius: 4,
        },
        colorPrimary: {
          backgroundColor: theme.palette.primary.light,
        },
        buffer: {
          backgroundColor: 'transparent',
        },
      },
    },
  };
}
