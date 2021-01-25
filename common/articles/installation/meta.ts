import {ArticleMetadata} from '../../types';

const meta: ArticleMetadata = {
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
};
export default meta;
