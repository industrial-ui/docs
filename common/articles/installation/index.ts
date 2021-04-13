import {ArticleType} from '../../types';
import content from './content';

const article: ArticleType = {
  id: 'installation',
  title: {
    default: 'Installation',
    rus: 'Установка',
  },
  contents: [
    {
      slug: 'unpkg',
      name: 'UNPKG CDN',
    },
    {
      slug: 'npm-local-imports',
      name: 'NPM with local imports',
    },
    {
      slug: 'global-plugin',
      name: 'As a global plugin',
    },
  ],
  article: content,
};

export default article;
