import meta from './meta';
import {ArticleType} from '../../types';

const article: ArticleType = {
  ...meta,
  article: {
    "time": 1614497779062,
    "version": "2.19.0",
    "languages": [
      "rus"
    ],
    "blocks": [
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "The Dropdown component allows you to toggle a menu from an invisible to a visible state. It can be opened by&nbsp;trigger&nbsp;click, hovering or focusing. Your dropdown can be positioned in different corners relative to the wrapper and customized to look anyhow depending only on your imagination.&nbsp;You can close the dropdown by clicking on the trigger once again or outside of the component.",
            "rus": "Компонент выпадающего меню позволяет вам переводить абсолютно-позиционированный блок из невидимого состояния в видимое. Меню открывается по клику, наведению или фокусированию на любой элемент в триггере. Меню может привязываться к разным углам триггера и выглядеть как вы захотите."
          }
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "All you need to know is that the component accepts two main slots:&nbsp;<code class=\"inline-code\">trigger</code>&nbsp;and&nbsp;<code class=\"inline-code\">default</code>. The first one is passed to the trigger element (it can be a button, input or any other controller), and the second – inside the dropdown.",
            "rus": "Компонент принимает два слота: <code class=\"inline-code\">trigger</code> и <code class=\"inline-code\">default</code>. Триггер может быть кнопкой, инпутом или другим контроллером. Второй слот – это внутренности выпадающего меню."
          }
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Simple usage",
            "rus": "Простейшее использование"
          },
          "level": 2,
          "slug": ""
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "The simplest dropdown:",
            "rus": "The simplest dropdown:"
          }
        }
      }
    ]
  }
};

export default article;
