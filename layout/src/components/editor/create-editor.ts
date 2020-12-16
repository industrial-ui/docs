const createEditor = async (data: {
  holder: string,
  autofocus: boolean,
  placeholder: string,
  onReady: () => void,
}) => {
  if (typeof window === 'undefined') return null;

  const EditorJS = (await import ('@editorjs/editorjs')).default;
  const Header = (await import ('@editorjs/header')).default;
  const SimpleImage = (await import ('@editorjs/simple-image')).default;
  const Code = (await import ('@editorjs/code')).default;
  const List = (await import ('@editorjs/list')).default;

  return new EditorJS({
    ...data,
    tools: {
      header: Header,
      list: List,
      code: Code,
      image: {
        class: SimpleImage,
        inlineToolbar: true,
        config: {
          placeholder: 'Paste image URL'
        }
      },
    },
  });
};

export default createEditor;
