import {SupportedLanguages} from '../types';
import getTranslation from '../get-translation';

const interfaceLang = {
  get_started: {
    default: 'Get started',
    rus: 'Начать',
  },
  edit_article: {
    default: 'Edit this article',
    rus: 'Редактировать эту статью',
  },
  contents: {
    default: 'Contents',
    rus: 'Содержание',
  }
}

const translateInterface = (name: keyof typeof interfaceLang, lang: SupportedLanguages|null = null): string => {
  return getTranslation(interfaceLang[name], lang);
}

export default translateInterface;
