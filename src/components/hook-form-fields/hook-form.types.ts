import { TextFieldProps } from '@mui/material';
import { FormEventHandler, ReactNode } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface FormProviderProps<T extends FieldValues> {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  methods: UseFormReturn<T>;
}

export interface RHFEditorProps {
  name: string;
}
export interface RHFSelectProps {
  name: string;
  children: ReactNode;
}
export interface RHFSwitchProps {
  name: string;
}
export type RHFTextFieldProps = TextFieldProps & {
  name: string;
  label?: string;
};

export interface RHFUploadAvatarProps {
  name: string;
}
