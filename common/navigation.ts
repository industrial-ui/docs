import {SidebarNavigation} from './types';

const navigation: SidebarNavigation[] = [
  {
    name: {
      eng: 'Get started',
      rus: 'Начало работы',
    },
    nested: [
      {
        slug: 'install',
        name: {
          eng: 'Installation',
          rus: 'Установка',
        },
      },
      {
        slug: 'config',
        name: {
          eng: 'Configuration',
          rus: 'Конфигурация',
        },
      },
    ],
  },
  {
    name: {
      eng: 'Components',
      rus: 'Компоненты',
    },
    nested: [
      {
        slug: 'dropdown',
        name: {
          eng: 'Dropdown',
          rus: 'Выпадающее меню',
        },
      },
    ],
  },
  {
    name: {
      eng: 'Contributors',
      rus: 'Контрибуторам',
    },
    nested: [
      {
        slug: 'doc-styling',
        name: {
          eng: 'Documentation styling',
          rus: 'Стили документации',
        },
      },
    ],
  }
];

export default navigation;
