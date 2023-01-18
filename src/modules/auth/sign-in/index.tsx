import { Button } from '@mui/material';

import { STRINGS } from '~/constants';
import { useLocales } from '~/hooks';

import useSignIn from '../hooks/useSignIn';

export default function SignIn() {
  const { signIn } = useSignIn();
  const { translate } = useLocales();

  return (
    <div>
      {/* <span>{translate(STRINGS.language)}</span>

      {allLang.map((option) => (
        <Button
          key={option.value}
          onClick={() => {
            onChangeLang(option.value);
          }}
        >
          {translate(option.label)}
        </Button>
      ))} */}
      <Button
        onClick={() =>
          signIn({
            email: 'axnguyen.it@gmail.com',
            password: '@Passw0rd1',
          })
        }
      >
        {translate(STRINGS.signIn)}
      </Button>
    </div>
  );
}
