import { Theme, ThemeOptions } from '@mui/material';

// ----------------------------------------------------------------------

export default function Popover(theme: Theme): ThemeOptions['components'] {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.dropdown,
          borderRadius: Number(theme.shape.borderRadius) * 1.5,
        },
      },
    },
  };
}
