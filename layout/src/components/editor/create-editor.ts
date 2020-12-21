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
  const Code = (await import ('@editorjs/code')).default;
  const List = (await import ('@editorjs/list')).default;
  // @ts-ignore
  const Image = (await import ('../../components/editor/image-block')).default;

  return new EditorJS({
    ...data,
    tools: {
      header: Header,
      list: List,
      code: Code,
      image: {
        class: Image,
        inlineToolbar: true,
        config: {
          placeholder: 'Paste image URL'
        }
      },
    },
  });
};

export default createEditor;
