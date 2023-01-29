import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { STRINGS } from '~/constants';
import { useLocales } from '~/hooks';
import { SignInRequest } from '~/services/request';

export function useSignInValidation() {
  const { translate } = useLocales();
  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email(translate(STRINGS.formValidation.invalidEmailFormat))
      .required(translate(STRINGS.formValidation.requiredEmail)),
    password: Yup.string().required(
      translate(STRINGS.formValidation.requiredPassword),
    ),
  });

  const defaultValues: SignInRequest = {
    email: 'axnguyen.it@gmail.com',
    password: '@Passw0rd1',
  };

  const formMethods = useForm<SignInRequest>({
    resolver: yupResolver(signInSchema),
    defaultValues,
  });

  return { formMethods };
}
