import {LangTextNode, SupportedLanguages} from './types';

const getTranslation = (textNode: LangTextNode): string => {
  if (typeof window === 'undefined') return '';

  const currentLanguage = (sessionStorage.getItem('iui-language') as SupportedLanguages|null);
  return currentLanguage ? textNode[currentLanguage] : textNode.default || '';
};

export default getTranslation;
