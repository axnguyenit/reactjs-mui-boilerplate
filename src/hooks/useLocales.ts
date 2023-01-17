import { useTranslation } from 'react-i18next';

import { LANGS } from '~/constants/constants';

export function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const languageStorage = localStorage.getItem('i18n');
  const currentLanguage =
    LANGS.find((_lang) => _lang.value === languageStorage) || LANGS[1];

  const handleChangeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('i18n', newLanguage);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLanguage,
    allLang: LANGS,
  };
}
