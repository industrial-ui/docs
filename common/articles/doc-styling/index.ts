import meta from './meta';
import {ArticleType} from '../../types';

const article: ArticleType = {
  ...meta,
  article: {
    "time": 1617914288391,
    "version": "2.19.0",
    "languages": [
      "rus"
    ],
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Paragraph",
            "rus": "Текст"
          },
          "level": 2,
          "slug": ""
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "This is the example page that demonstrates how the documentation can be styled with the use of&nbsp;<a href=\"https://editor.industrial-ui.com/\">the editor</a>.",
            "rus": "Эта статья демонстрирует как документация может быть стилизована разными блоками <a href=\"https://editor.industrial-ui.com/\">редактора</a>."
          }
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "You look at the very simple paragraph block. It supports <i>italic</i>, <b>bold</b>, <b><i>italic bold</i></b> text, <code class=\"inline-code\">inline code</code> examples and the links, as you could see above.",
            "rus": "Вы смотрите на самый просто блок – абзац. Он поддерживает <i>курсив</i>, жирный шрифт, <b><i>текст жирным курсивом</i></b>, <code class=\"inline-code\">примеры кода и ссылки</code>, которые показаны выше."
          }
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Headings",
            "rus": "Заголовки"
          },
          "level": 2,
          "slug": ""
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Heading 1",
            "rus": "Заголовок 1"
          },
          "level": 1,
          "slug": ""
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Heading 2",
            "rus": "Заголовок 2"
          },
          "level": 2,
          "slug": ""
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Heading 3",
            "rus": "Заголовок 3"
          },
          "level": 3,
          "slug": ""
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Heading 4",
            "rus": "Заголовок 4"
          },
          "level": 4,
          "slug": ""
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Heading 5",
            "rus": "Заголовок 5"
          },
          "level": 5,
          "slug": ""
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Heading 6",
            "rus": "Заголовок 6"
          },
          "level": 6,
          "slug": ""
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
        "type": "header",
        "data": {
          "text": {
            "default": "Lists",
            "rus": "Списки"
          },
          "level": 2,
          "slug": ""
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
        "type": "header",
        "data": {
          "text": {
            "default": "Code blocks",
            "rus": "Блоки кода"
          },
          "level": 2,
          "slug": ""
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "Code blocks allow you to type the code in several languages for which there is a built-in syntax highlighter.",
            "rus": "Блоки кода позволяют вам писать код на нескольких языках, для которых поддерживается подсветка синтаксиса."
          }
        }
      },
      {
        "type": "code",
        "data": {
          "code": "\n<span class=\"token selector\">.container</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">max-width</span><span class=\"token punctuation\">:</span> 1024px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> 0 auto<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>",
          "codeLang": "css"
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Showcases",
            "rus": "Демо компонентов"
          },
          "level": 2,
          "slug": ""
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "These are the blocks demonstrating the real usage of components. It requires having the code of the demo (HTML), code of config (iui-config in JSON or JS), and the path to the demo file from `examples` directory of the documentation.",
            "rus": "Этот блок демонстрирует реальное использование industrial-ui компонентов. Для него нужен код самих компонентов (на HTML), код конфигурации компонентов (на JSON или JS) и путь к файлу демонстрации (к примеру, <code class=\"inline-code\">button/simple.vue</code>) из папки examples, находящейся в коде документации."
          }
        }
      },
      {
        "type": "showcase",
        "data": {
          "path": "button/simple.vue",
          "demoCode": "\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IuiButton</span><span class=\"token punctuation\">></span></span>Hello<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>IuiButton</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>",
          "demoConfig": "\n<span class=\"token punctuation\">{</span>\n  globalClass<span class=\"token operator\">:</span> <span class=\"token string\">'ui'</span><span class=\"token punctuation\">,</span>\n  components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    button<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">class</span><span class=\"token operator\">:</span> <span class=\"token string\">'button'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Images",
            "rus": "Изображения"
          },
          "level": 2,
          "slug": ""
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "Simply add images with the caption that supports markup.",
            "rus": "Простые изображения с подписями к ним."
          }
        }
      },
      {
        "type": "image",
        "data": {
          "url": "https://images.unsplash.com/photo-1609620572020-b5150f6ae263?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80",
          "caption": {
            "default": "The man, taken from <a href=\"https://unsplash.com/photos/_Zi8QeOr1gU\">Unsplash</a>",
            "rus": "Мужчина, взято с&nbsp;<a href=\"https://unsplash.com/photos/_Zi8QeOr1gU\">Unsplash</a>"
          }
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "Tables",
            "rus": "Таблицы"
          },
          "level": 2,
          "slug": ""
        }
      },
      {
        "type": "table",
        "data": {
          "content": [
            [
              {
                "default": "Cell1 of Row1",
                "rus": "Ячейка1 Строки1"
              },
              {
                "default": "Cell2 of Row1",
                "rus": "Ячейка2 Строки1"
              }
            ],
            [
              {
                "default": "Cell1 of Row2",
                "rus": "Ячейка1 Строки2"
              },
              {
                "default": "Cell2 of Row2",
                "rus": "Ячейка2 Строки2"
              }
            ]
          ]
        }
      }
    ]
  }
};

export default article;
