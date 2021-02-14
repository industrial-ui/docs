import {LangTextNode, SupportedLanguages} from './types';
import {LANGUAGE_EVENT} from './dispatch';

const getTranslation = (textNode: LangTextNode, lang: SupportedLanguages|null = null): string => {
  if (!textNode) return '';

  if (lang) return textNode[lang] || textNode.default;
  if (lang === null) return textNode.default;

  if (typeof window === 'undefined') return textNode.default || '';

  const currentLanguage = (sessionStorage.getItem(LANGUAGE_EVENT) as SupportedLanguages|null);
  return textNode[currentLanguage || 'default'] || textNode.default || '';
};

export default getTranslation;
