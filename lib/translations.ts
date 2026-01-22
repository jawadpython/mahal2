import ar from '@/messages/ar.json';
import fr from '@/messages/fr.json';
import { Locale } from './i18n';

const translations = {
  ar,
  fr,
};

export type TranslationKey = keyof typeof ar;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function getNestedTranslation(
  translations: any,
  key: string
): string {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
}
