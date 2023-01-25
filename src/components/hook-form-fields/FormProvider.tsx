import { FormProvider as RHFormProvider } from 'react-hook-form';

import { FormProviderProps } from './hook-form.types';

export default function FormProvider({
  children,
  onSubmit,
  methods,
}: FormProviderProps) {
  return (
    <RHFormProvider {...methods}>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        {children}
      </form>
    </RHFormProvider>
  );
}
