const createEditor = async (data: {
  holder: string,
  autofocus: boolean,
  placeholder: string,
  data?: any,
  onReady: () => void,
}) => {
  if (typeof window === 'undefined') return null;

  const EditorJS = (await import ('@editorjs/editorjs')).default;
  const Header = (await import ('@editorjs/header')).default;
  const List = (await import ('@editorjs/list')).default;
  const Table = (await import ('editorjs-table')).default;
  const InlineCode = (await import ('@editorjs/inline-code')).default;
  const Image = (await import ('./image-block')).default;
  const Code = (await import ('./code-block')).default;
  const Showcase = (await import ('./showcase-block')).default;

  return new EditorJS({
    ...data,
    tools: {
      header: Header,
      list: List,
      // @ts-ignore
      code: Code,
      // @ts-ignore
      showcase: Showcase,
      table: Table,
      image: {
        // @ts-ignore
        class: Image,
        inlineToolbar: true,
        config: {
          placeholder: 'Paste image URL'
        }
      },
      inlineCode: InlineCode,
    },
  });
};

export default createEditor;
