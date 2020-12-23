export type SupportedLanguages = 'eng'|'rus';

export interface LangTextNode extends Record<string, string> {
  default: string,
}

export type SidebarNavigation = {
  name: LangTextNode,
  nested: RouteInNavigation[],
}

export type RouteInNavigation = {
  slug: string,
  name: LangTextNode,
}
