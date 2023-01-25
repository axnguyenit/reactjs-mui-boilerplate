import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { RHFSelectProps } from './hook-form.types';

export default function RHFSelect({
  name,
  children,
  ...other
}: RHFSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{ native: true }}
          error={Boolean(error)}
          helperText={error?.message}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  );
}
