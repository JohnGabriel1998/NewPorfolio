import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import en from './locales/en';
import ja from './locales/ja';

const STORAGE_KEY = 'jgcb-locale';

const locales = { en, ja };

const I18nContext = createContext(null);

function getInitialLocale() {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'ja') return stored;
  return window.navigator.language.startsWith('ja') ? 'ja' : 'en';
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale);

  const setLocale = (next) => {
    if (next !== 'en' && next !== 'ja') return;
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const t = locales[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
