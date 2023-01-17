import { ReactNode, useEffect } from 'react';

import { useLocales } from '~/hooks';

function LocalesProvider({ children }: { children: ReactNode }) {
  const { onChangeLang } = useLocales();

  useEffect(() => {
    const localeValue = localStorage.getItem('i18n') || 'en';

    onChangeLang(localeValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{children}</div>;
}

export { LocalesProvider };
