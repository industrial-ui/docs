import meta from './meta';

const article = {
  ...meta,
  blocks: [
    {
      type: 'heading',
      text: {
        eng: 'Hello',
        rus: 'Привет',
      },
    },
    {
      type: 'Paragraph',
      text: {
        eng: 'This is the styling',
        rus: 'Просто строка, ничего удивительного',
      },
    }
  ],
};

export default article;
