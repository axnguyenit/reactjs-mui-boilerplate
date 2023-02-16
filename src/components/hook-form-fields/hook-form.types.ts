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

  [key: string]: any;
}
export interface RHFSelectProps {
  name: string;
  children: ReactNode;

  [key: string]: any;
}
export interface RHFSwitchProps {
  name: string;

  [key: string]: any;
}
export type RHFTextFieldProps = TextFieldProps & {
  name: string;
  label?: string;

  [key: string]: any;
};

export interface RHFUploadAvatarProps {
  name: string;

  [key: string]: any;
}
