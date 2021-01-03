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
  article: {
    time: number,
    blocks: {
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
      }
    }[],
    version: string,
  }
}
