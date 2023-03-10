import {
  ComponentsPropsList,
  Interpolation,
  Theme,
  ThemeOptions,
} from '@mui/material';

// ----------------------------------------------------------------------

type ColorType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export default function ButtonGroup(theme: Theme): ThemeOptions['components'] {
  const styleContained = (
    color: ColorType,
  ): {
    props: Partial<ComponentsPropsList['MuiButtonGroup']>;
    style: Interpolation<{ theme: Theme }>;
  } => ({
    props: { variant: 'contained', color },
    style: { boxShadow: theme.customShadows[color] },
  });

  return {
    MuiButtonGroup: {
      variants: [
        {
          props: { variant: 'contained', color: 'inherit' },
          style: { boxShadow: theme.customShadows.z8 },
        },
        styleContained('primary'),
        styleContained('secondary'),
        styleContained('info'),
        styleContained('success'),
        styleContained('warning'),
        styleContained('error'),
        {
          props: { disabled: true },
          style: {
            boxShadow: 'none',
            '& .MuiButtonGroup-grouped.Mui-disabled': {
              color: theme.palette.action.disabled,
              borderColor: `${theme.palette.action.disabledBackground} !important`,
              '&.MuiButton-contained': {
                backgroundColor: theme.palette.action.disabledBackground,
              },
            },
          },
        },
      ],

      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  };
}
