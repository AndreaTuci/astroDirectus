import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  /**
   * Returns a translation function based on the specified language key.
   * The translation function takes a key as input and returns the corresponding translation in the specified language,
   * falling back to the default language if the translation is not available.
   * 
   * @param lang - The language key for the desired translation.
   * @returns A translation function that can be used to retrieve translations in the specified language.
   * 
   * @example
   * const t = useTranslations('en');
   * const greeting = t('greeting');
   * console.log(greeting); // Output: 'Hello'
   * 
   * const tFr = useTranslations('fr');
   * const greetingFr = tFr('greeting');
   * console.log(greetingFr); // Output: 'Bonjour'
   */
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
