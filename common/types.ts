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

export type ContentsType = {
  slug: string,
  name: string,
}

export interface ArticleMetadata {
  id: string,
  title: LangTextNode,
  contents: ContentsType[]
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
    slug?: string,
    level?: number,

    // type === 'list'
    style?: 'ordered'|'unordered',
    items?: LangTextNode[],

    // type === 'code'
    code?: string,
    codeLang?: string,

    // type === 'image'
    url?: string,
    caption?: LangTextNode,

    // type === 'table'
    content?: LangTextNode[][],
  }
}
