import { TextFieldProps } from '@mui/material';
import { FormEventHandler, ReactNode } from 'react';

export interface FormProviderProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  methods: any;
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
