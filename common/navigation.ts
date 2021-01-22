import {SidebarNavigation} from './types';

const navigation: SidebarNavigation[] = [
  {
    name: {
      default: 'Get started',
      rus: 'Начало работы',
    },
    nested: [
      {
        slug: 'installation',
        name: {
          default: 'Installation',
          rus: 'Установка',
        },
      },
      {
        slug: 'configuration',
        name: {
          default: 'Configuration',
          rus: 'Конфигурация',
        },
      },
    ],
  },
  {
    name: {
      default: 'Components',
      rus: 'Компоненты',
    },
    nested: [
      {
        slug: 'dropdown',
        name: {
          default: 'Dropdown',
          rus: 'Выпадающее меню',
        },
      },
    ],
  },
  {
    name: {
      default: 'Contributors',
      rus: 'Контрибуторам',
    },
    nested: [
      {
        slug: 'doc-styling',
        name: {
          default: 'Documentation styling',
          rus: 'Стили документации',
        },
      },
    ],
  }
];

export default navigation;
