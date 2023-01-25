import { FormControlLabel, Switch } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { RHFSwitchProps } from './hook-form.types';

export default function RHFSwitch({ name, ...other }: RHFSwitchProps) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      label=""
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Switch {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
}
