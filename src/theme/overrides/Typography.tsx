import { Theme, ThemeOptions } from '@mui/material';

// ----------------------------------------------------------------------

export default function Typography(theme: Theme): ThemeOptions['components'] {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
