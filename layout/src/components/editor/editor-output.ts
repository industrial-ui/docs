import type {OutputData} from '@editorjs/editorjs';
import {LangTextNode} from '../../../../common/types';

const convertStringToLanguageObject = (defaultLang: string, translationLang?: string, translationText?: string) => {
  const languageObject: LangTextNode = {
    default: defaultLang,
  };
  if (translationLang && translationText) languageObject[translationLang] = translationText;

  return languageObject;
};

const convertLanguageObjectToString = (data: Record<string, string>, lang: string) => {
  return data[lang] || data.default;
};

/**
 * The function gets the EditorJS data output and transforms it into the multi-lingual article
 * */
const editorOutputToProxy = (data: OutputData, translation?: {lang: string, translation: OutputData}) => {
  const blocks = data.blocks.map((block, index) => {
    let newBlock = {...block, data: {...block.data}};
    let translationBlock = translation ? translation.translation.blocks[index] : null;
    if (translationBlock && translationBlock.type !== newBlock.type) {
      throw new Error('The data in the translation is corrupted. The editor blocks should go in the same order and be of the same type.');
    }

    if (newBlock.type === 'paragraph' || newBlock.type === 'header') {
      newBlock.data.text = convertStringToLanguageObject(newBlock.data.text, translation?.lang, translationBlock?.data?.text);
    } else if (newBlock.type === 'list') {
      newBlock.data.items = newBlock.data.items.map((str: string, i: number) => {
        const arrElem = translationBlock?.data?.items?.[i];
        return convertStringToLanguageObject(str, translation?.lang, arrElem);
      });
    } else if (newBlock.type === 'image') {
      newBlock.data.caption = convertStringToLanguageObject(newBlock.data.caption, translation?.lang, translationBlock?.data?.caption);
    }
    return newBlock;
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
