import {ArticleProxyType, ArticleType} from '../../types';
import content from './content';

const article: ArticleType = {
  id: 'doc-styling',
  title: {
    default: 'Documentation styling',
    rus: 'Стилизация документации',
  },
  contents: [],
  article: content as ArticleProxyType,
};

export default article;
