import type {OutputData} from '@editorjs/editorjs';
import {
  ArticleBlockType,
  ArticleProxyType,
  LangTextNode
} from '../../../../common/types';
import {uniqueArray} from '../../../../common/useful';

const convertStringToLanguageObject = (defaultLang: string|LangTextNode, translationLang?: string, translationText?: string|LangTextNode) => {
  const languageObject: LangTextNode = typeof defaultLang === 'object' ? defaultLang : {
    default: defaultLang,
  };
  if (translationLang && translationText) languageObject[translationLang] = typeof translationText === 'object' ? translationText[translationLang] : translationText;

  return languageObject;
};

const convertLanguageObjectToString = (data: Record<string, string>, lang: string) => {
  return data[lang] || data.default;
};

/**
 * The function gets the EditorJS data output and transforms it into the multi-lingual article
 * */
const editorOutputToProxy = (data: OutputData & {languages?: string[]}, translation?: {lang: string, translation: OutputData}): ArticleProxyType => {
  const blocks = data.blocks.map((block, index) => {
    let newBlock = {...block, data: {...block.data}};
    let translationBlock = translation ? translation.translation.blocks[index] : null;
    if (translationBlock && translationBlock.type !== newBlock.type) {
      throw new Error('The data in the translation is corrupted. The editor blocks should go in the same order and be of the same type.');
    }

    // Make manipulations that transform any string with text into the LangTextNode for each block type
    if (newBlock.type === 'paragraph' || newBlock.type === 'header') {
      newBlock.data.text = convertStringToLanguageObject(newBlock.data.text, translation?.lang, translationBlock?.data?.text);
    } else if (newBlock.type === 'list') {
      newBlock.data.items = newBlock.data.items.map((str: string, i: number) => {
        const arrElem = translationBlock?.data?.items?.[i];
        return convertStringToLanguageObject(str, translation?.lang, arrElem);
      });
    } else if (newBlock.type === 'image') {
      newBlock.data.caption = convertStringToLanguageObject(newBlock.data.caption, translation?.lang, translationBlock?.data?.caption);
    } else if (newBlock.type === 'table') {
      newBlock.data.content = newBlock.data.content.map((items: string[], i: number) => {
        const arrElem = translationBlock?.data?.content?.[i];
        return items.map((elem, j) => {
          const translateElem = arrElem?.[j];
          return convertStringToLanguageObject(elem, translation?.lang, translateElem);
        });
      });
    } else if (newBlock.type === 'code') {
      if (!newBlock.data.codeLang) {
        newBlock.data.codeLang = 'html';
      }
    }

    return newBlock as ArticleBlockType;
  });

  return {
    time: data.time || Date.now(),
    version: data.version || '',
    languages: uniqueArray<string>([
      ...(data.languages ? data.languages : []),
      ...(translation?.lang ? [translation.lang] : [])
    ]),
    blocks,
  };
};

const editorProxyToInput = (data: OutputData, lang: string) => {
  // Transform all the LangTextNodes by type to the strings of needed translation
  const blocks = data.blocks.map((block) => {
    if (block.type === 'paragraph' || block.type === 'header') {
      block.data.text = convertLanguageObjectToString(block.data.text, lang);
    } else if (block.type === 'list') {
      block.data.items = block.data.items.map((obj: any) => convertLanguageObjectToString(obj, lang));
    } else if (block.type === 'image') {
      block.data.caption = convertLanguageObjectToString(block.data.caption, lang);
    } else if (block.type === 'table') {
      block.data.content = block.data.content.map((items: LangTextNode[]) => {
        return items.map((elem) => convertLanguageObjectToString(elem, lang));
      });
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
