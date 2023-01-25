import { ReactNode, useEffect } from 'react';

import { useLocales } from '~/hooks';

function LocalesProvider({ children }: { children: ReactNode }) {
  const { onChangeLanguage } = useLocales();

  useEffect(() => {
    const localeValue = localStorage.getItem('i18n') || 'en';

    onChangeLanguage(localeValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{children}</div>;
}

export { LocalesProvider };
