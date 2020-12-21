import type {OutputData} from '@editorjs/editorjs';

const convertStringToLanguageObject = (data: string) => {
  return {
    default: data,
  };
};

const convertLanguageObjectToString = (data: Record<string, string>, lang: string) => {
  return data[lang] || data.default;
};

/**
 * The function gets the EditorJS data output and transforms it into the multi-lingual article
 * */
const editorOutputToProxy = (data: OutputData) => {
  const blocks = data.blocks.map((block) => {
    if (block.type === 'paragraph' || block.type === 'header') {
      block.data.text = convertStringToLanguageObject(block.data.text);
    } else if (block.type === 'list') {
      block.data.items = block.data.items.map((str: string) => convertStringToLanguageObject(str));
    } else if (block.type === 'image') {
      block.data.caption = convertStringToLanguageObject(block.data.caption);
    }
    return block;
  });

  return {
    ...data,
    blocks,
  };
};

const editorProxyToInput = (data: OutputData, lang: string) => {
  const blocks = data.blocks.map((block) => {
    if (block.type === 'paragraph' || block.type === 'header') {
      block.data.text = convertLanguageObjectToString(block.data.text, lang);
    } else if (block.type === 'list') {
      block.data.items = block.data.items.map((obj: any) => convertLanguageObjectToString(obj, lang));
    } else if (block.type === 'image') {
      block.data.caption = convertLanguageObjectToString(block.data.caption, lang);
    }
    return block;
  });

  return {
    ...data,
    blocks,
  };
};

export {
  editorOutputToProxy,
  editorProxyToInput,
};
