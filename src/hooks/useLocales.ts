import { useTranslation } from 'react-i18next';

import { LANGUAGES } from '~/constants/constants';

export function useLocales() {
  const { i18n, t } = useTranslation();
  const languageStorage = localStorage.getItem('i18n');
  const currentLanguage =
    LANGUAGES.find((_lang) => _lang.value === languageStorage) || LANGUAGES[0];

  const handleChangeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('i18n', newLanguage);
  };

  const translate = (key: string): string => t(key);

  return {
    onChangeLanguage: handleChangeLanguage,
    translate,
    currentLanguage,
    allLanguages: LANGUAGES,
  };
}
