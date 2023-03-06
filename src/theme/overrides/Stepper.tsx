import { Theme, ThemeOptions } from '@mui/material';

// ----------------------------------------------------------------------

export default function Stepper(theme: Theme): ThemeOptions['components'] {
  return {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: theme.palette.divider,
        },
      },
    },
  };
}
