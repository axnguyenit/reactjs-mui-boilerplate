import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';

import { FormProvider, Iconify, Image, Logo, RHFTextField } from '~/components';
import { APP_IMAGES, STRINGS } from '~/constants';
import { useLocales, useResponsive } from '~/hooks';
import { PATH_AUTH } from '~/routes/path';
import { SignInRequest } from '~/services/request';

import useSignIn from '../hooks/useSignIn';
import {
  ContentStyle,
  HeaderStyle,
  RootStyle,
  SectionStyle,
} from './sign-in.styles';

export default function SignIn() {
  const { signIn } = useSignIn();
  const { translate } = useLocales();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const isSmUp = useResponsive('up', 'sm');
  const isMdUp = useResponsive('up', 'md');

  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues: SignInRequest = {
    email: 'axnguyenn.it@gmail.com',
    password: '@Passw0rd1',
  };

  const methods = useForm<SignInRequest>({
    resolver: yupResolver(signInSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <RootStyle>
      <HeaderStyle>
        <Logo />
        {isSmUp && (
          <Typography variant="body2" sx={{ mt: { lg: 1, md: -2 } }}>
            {translate(STRINGS.authentication.doNotHaveAnAccount)}&nbsp;
            <Link
              variant="subtitle2"
              component={RouterLink}
              to={PATH_AUTH.register}
            >
              {translate(STRINGS.getStarted)}
            </Link>
          </Typography>
        )}
      </HeaderStyle>

      {isMdUp && (
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            {translate(STRINGS.welcomeBack)}
          </Typography>
          <Image alt="Sign In" src={APP_IMAGES.signIn} />
        </SectionStyle>
      )}
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                {translate(STRINGS.authentication.signIn)}
              </Typography>
            </Box>

            <Image
              disabledEffect
              src={APP_IMAGES.jwtIcon}
              sx={{ width: 32, height: 32 }}
            />
          </Stack>

          <FormProvider methods={methods} onSubmit={handleSubmit(signIn)}>
            <Stack spacing={3}>
              {/* {Boolean(error) && <Alert severity="error">{error}</Alert>} */}
              <RHFTextField
                name="email"
                label={translate(STRINGS.formField.emailLabel)}
              />

              <RHFTextField
                name="password"
                label={translate(STRINGS.formField.passwordLabel)}
                type={isShowPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        edge="end"
                      >
                        <Iconify
                          icon={
                            isShowPassword ? 'eva:eye-off-fill' : 'eva:eye-fill'
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              {/* <RHFCheckbox name='remember' label='Remember me' /> */}
              <Link
                component={RouterLink}
                variant="subtitle2"
                to={PATH_AUTH.forgotPassword}
              >
                {translate(STRINGS.authentication.forgotPassword)}
              </Link>
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              {translate(STRINGS.authentication.signIn)}
            </LoadingButton>
          </FormProvider>

          {!isSmUp && (
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              {translate(STRINGS.authentication.doNotHaveAnAccount)}&nbsp;
              <Link
                variant="subtitle2"
                component={RouterLink}
                to={PATH_AUTH.register}
              >
                {translate(STRINGS.getStarted)}
              </Link>
            </Typography>
          )}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
