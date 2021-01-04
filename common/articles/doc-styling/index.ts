import meta from './meta';
import {ArticleType} from '../../types';

const article: ArticleType = {
  ...meta,
  article: {
    "time": 1609687585668,
    "blocks": [
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "This is the example page that demonstrates how the documentation can be styled with the use of <a href=\"https://editor.industrial-ui.com/\">the editor</a>.",
            "rus": "Эта статья демонстрирует как документация может быть стилизирована разными блоками <a href=\"https://editor.industrial-ui.com/\">редактора</a>."
          }
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "You look at the very simple paragraph block. It supports <i>italic</i>, <b>bold</b>, <b><i>italic bold</i></b> text and the links, as you could see above.",
            "rus": "Вы смотрите на самый просто блок – абзац. Он поддерживает <i>курсив</i>, <b>жирный шрифт</b>, <b><i>текст жирным курсивом</i></b> и ссылки, которые показаны выше."
          }
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Heading 1",
            "rus": "Заголовок 1"
          },
          "level": 1
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Heading 2",
            "rus": "Заголовок 2"
          },
          "level": 2
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Heading 3",
            "rus": "Заголовок&nbsp;3"
          },
          "level": 3
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Heading 4",
            "rus": "Заголовок 4"
          },
          "level": 4
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Heading 5",
            "rus": "Заголовок 5"
          },
          "level": 5
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Heading 6",
            "rus": "Заголовок 6"
          },
          "level": 6
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "Even though all types of heading are supported, it is not recommended to use the headings of level deeper than 3.",
            "rus": "Несмотря на то что поддерживаются все типы заголовков, не рекомендуется использовать уровни глубже третьего."
          }
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "The editor supports ordered and unordered list. Here are they:",
            "rus": "Редактор поддерживает списки: нумерованные и маркированные. Вот они:"
          }
        }
      },
      {
        "type": "list",
        "data": {
          "style": "ordered",
          "items": [
            {
              "default": "Some",
              "rus": "Какой-то"
            },
            {
              "default": "Ordered",
              "rus": "Нумерованный"
            },
            {
              "default": "List",
              "rus": "Список"
            }
          ]
        }
      },
      {
        "type": "list",
        "data": {
          "style": "unordered",
          "items": [
            {
              "default": "Some",
              "rus": "Какой-то"
            },
            {
              "default": "Unordered",
              "rus": "Маркированный"
            },
            {
              "default": "List",
              "rus": "Список"
            }
          ]
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "And the code blocks are also allowed:",
            "rus": "Блоки кода тоже доступны для редактирования:"
          }
        }
      },
      {
        "type": "code",
        "data": {
          "code": "\n.container {\n  max-width: 1024px;\n  margin: 0 auto;\n}"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "The last block for now, image with the caption:",
            "rus": "И напоследок, блок картинки с подписью:"
          }
        }
      },
      {
        "type": "image",
        "data": {
          "url": "https://images.unsplash.com/photo-1609620572020-b5150f6ae263?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80",
          "caption": {
            "default": "The man, taken from <a href=\"https://unsplash.com/photos/_Zi8QeOr1gU\">Unsplash</a>",
            "rus": "Человек, изображение взято с&nbsp;<a href=\"https://unsplash.com/photos/_Zi8QeOr1gU\">Unsplash</a>"
          }
        }
      }
    ],
    "version": "2.19.0"
  }
};

export default article;
