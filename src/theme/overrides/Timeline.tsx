import { Theme, ThemeOptions } from '@mui/material';

// ----------------------------------------------------------------------

export default function Timeline(theme: Theme): ThemeOptions['components'] {
  return {
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },

    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.divider,
        },
      },
    },
  };
}
