import {LangTextNode, SupportedLanguages} from './types';
import {LANGUAGE_EVENT} from './dispatch';

const getTranslation = (textNode: LangTextNode, lang: SupportedLanguages|null = null): string => {
  if (lang) return textNode[lang];

  if (typeof window === 'undefined') return '';

  const currentLanguage = (sessionStorage.getItem(LANGUAGE_EVENT) as SupportedLanguages|null);
  return currentLanguage ? textNode[currentLanguage] : textNode.default || '';
};

export default getTranslation;
