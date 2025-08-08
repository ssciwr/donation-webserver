import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { translations, type Language } from './translations.js';

// Default language
const defaultLanguage: Language = 'de';

// Create a writable store for the current language
function createLanguageStore() {
  let initialLanguage = defaultLanguage;
  
  // In browser, try to get language from localStorage or browser preference
  if (browser) {
    const stored = localStorage.getItem('language') as Language;
    if (stored && stored in translations) {
      initialLanguage = stored;
    } else {
      // Check browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (browserLang in translations) {
        initialLanguage = browserLang;
      }
    }
  }
  
  const { subscribe, set } = writable<Language>(initialLanguage);
  
  return {
    subscribe,
    set: (language: Language) => {
      set(language);
      if (browser) {
        localStorage.setItem('language', language);
      }
    },
    reset: () => set(defaultLanguage)
  };
}

export const currentLanguage = createLanguageStore();

// Derived store for current translations
export const t = derived(
  currentLanguage,
  ($currentLanguage) => translations[$currentLanguage]
);

// Helper function to get nested translation with type safety
export function _(key: string, lang?: Language): string {
  const language = lang || 'de';
  const keys = key.split('.');
  let result: any = translations[language];
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      // Fallback to German if key not found
      result = translations.de;
      for (const fallbackKey of keys) {
        if (result && typeof result === 'object' && fallbackKey in result) {
          result = result[fallbackKey];
        } else {
          console.warn(`Translation key "${key}" not found in language "${language}" or fallback "de"`);
          return key; // Return the key itself if not found
        }
      }
      break;
    }
  }
  
  return typeof result === 'string' ? result : key;
}

// Export type for Language
export type { Language } from './translations.js';
