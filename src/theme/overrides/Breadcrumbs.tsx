import { Theme, ThemeOptions } from '@mui/material';

// ----------------------------------------------------------------------

export default function Breadcrumbs(theme: Theme): ThemeOptions['components'] {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
        },
      },
    },
  };
}
