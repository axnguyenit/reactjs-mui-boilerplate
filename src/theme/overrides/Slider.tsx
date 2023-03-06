import { Theme, ThemeOptions } from '@mui/material';

// ----------------------------------------------------------------------

export default function Slider(theme: Theme): ThemeOptions['components'] {
  return {
    MuiSlider: {
      defaultProps: {
        size: 'small',
      },

      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.palette.action.disabled,
          },
        },
        markLabel: {
          fontSize: 13,
          color: theme.palette.text.disabled,
        },
        valueLabel: {
          borderRadius: 8,
          backgroundColor: theme.palette.grey[800],
        },
      },
    },
  };
}
