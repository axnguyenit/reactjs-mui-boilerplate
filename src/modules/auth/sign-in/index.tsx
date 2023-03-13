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
import { Link as RouterLink } from 'react-router-dom';

import { FormProvider, Iconify, Image, Logo, RHFTextField } from '~/components';
import { APP_IMAGES } from '~/constants';
import { useLocales, useResponsive } from '~/hooks';
import { PATH_AUTH } from '~/routes/path';

import { useSignIn } from '../hooks';
import {
  ContentStyle,
  HeaderStyle,
  RootStyle,
  SectionStyle,
} from './sign-in.styles';

export default function SignIn() {
  const { signIn, formMethods } = useSignIn();
  const { translate } = useLocales();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const isSmUp = useResponsive('up', 'sm');
  const isMdUp = useResponsive('up', 'md');
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = formMethods;

  return (
    <RootStyle>
      <HeaderStyle>
        <Logo />
        {isSmUp && (
          <Typography variant="body2" sx={{ mt: { lg: 1, md: -2 } }}>
            {translate('authentication.doNotHaveAnAccount')}&nbsp;
            <Link
              variant="subtitle2"
              component={RouterLink}
              to={PATH_AUTH.register}
            >
              {translate('getStarted')}
            </Link>
          </Typography>
        )}
      </HeaderStyle>

      {isMdUp && (
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            {translate('welcomeBack')}
          </Typography>
          <Image alt="Sign In" src={APP_IMAGES.signIn} />
        </SectionStyle>
      )}
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                {translate('authentication.signIn')}
              </Typography>
            </Box>

            <Image
              disabledEffect
              src={APP_IMAGES.jwtIcon}
              sx={{ width: 32, height: 32 }}
            />
          </Stack>

          <FormProvider methods={formMethods} onSubmit={handleSubmit(signIn)}>
            <Stack spacing={3}>
              {/* {Boolean(error) && <Alert severity="error">{error}</Alert>} */}
              <RHFTextField
                name="email"
                label={translate('formField.emailLabel')}
              />

              <RHFTextField
                name="password"
                label={translate('formField.passwordLabel')}
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
                {translate('authentication.forgotPassword')}
              </Link>
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              {translate('authentication.signIn')}
            </LoadingButton>
          </FormProvider>

          {!isSmUp && (
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              {translate('authentication.doNotHaveAnAccount')}&nbsp;
              <Link
                variant="subtitle2"
                component={RouterLink}
                to={PATH_AUTH.register}
              >
                {translate('getStarted')}
              </Link>
            </Typography>
          )}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
