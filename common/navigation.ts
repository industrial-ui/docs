interface SidebarNavigation {
  name: string,
  nested: RouteInNavigation[],
}
type RouteInNavigation = {
  slug: string,
  name: string,
}

const navigation: SidebarNavigation[] = [
  {
    name: 'Get started',
    nested: [
      {
        slug: 'install',
        name: 'Installation',
      },
      {
        slug: 'config',
        name: 'Configuration',
      },
    ],
  },
  {
    name: 'Components',
    nested: [
      {
        slug: 'button',
        name: 'Button',
      },
      {
        slug: 'dropdown',
        name: 'Dropdown',
      },
      {
        slug: 'modal',
        name: 'Modal',
      },
    ],
  },
  {
    name: 'Contributors',
    nested: [
      {
        slug: 'doc-styling',
        name: 'Documentation styling',
      },
    ],
  }
];

export default navigation;
