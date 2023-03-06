import { Theme, ThemeOptions } from '@mui/material';

// ----------------------------------------------------------------------

export default function Tooltip(theme: Theme): ThemeOptions['components'] {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
  };
}
