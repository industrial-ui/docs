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

export interface ArticleMetadata {
  title: LangTextNode,
}

export interface ArticleType extends ArticleMetadata {
  article: ArticleProxyType
}

export interface ArticleProxyType {
  languages: string[], // The array of translated languages (instead of "default")
  blocks: ArticleBlockType[],
  time: number,
  version: string,
}

export interface ArticleBlockType {
  type: string,
  data: {
    // type === 'paragraph'|'header'
    text?: LangTextNode,

    // type === 'header'
    level?: number,

    // type === 'list'
    style?: 'ordered'|'unordered',
    items?: LangTextNode[],

    // type === 'code'
    code?: string,

    // type === 'image'
    url?: string,
    caption?: LangTextNode,

    // type === 'table'
    content?: LangTextNode[][],
  }
}
