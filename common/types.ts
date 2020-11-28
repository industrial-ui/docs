export type SupportedLanguages = 'eng'|'rus';

export type LangTextNode = Record<SupportedLanguages, string> & {default?: string}

export type SidebarNavigation = {
  name: LangTextNode,
  nested: RouteInNavigation[],
}

export type RouteInNavigation = {
  slug: string,
  name: LangTextNode,
}
