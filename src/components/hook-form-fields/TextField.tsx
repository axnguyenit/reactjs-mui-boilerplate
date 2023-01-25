import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { RHFTextFieldProps } from './hook-form.types';

export default function RHFTextField({
  name,
  label,
  ...other
}: RHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          error={Boolean(error)}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
