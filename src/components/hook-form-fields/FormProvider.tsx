import { FieldValues, FormProvider as RHFormProvider } from 'react-hook-form';

import { FormProviderProps } from './hook-form.types';

export default function FormProvider<T extends FieldValues>({
  children,
  onSubmit,
  methods,
}: FormProviderProps<T>) {
  return (
    <RHFormProvider {...methods}>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        {children}
      </form>
    </RHFormProvider>
  );
}
