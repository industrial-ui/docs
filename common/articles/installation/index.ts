import meta from './meta';
import {ArticleType} from '../../types';

const article: ArticleType = {
  ...meta,
  article: {
    "time": 1611315920930,
    "version": "2.19.0",
    "languages": [],
    "blocks": [
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "There are three ways to install Industrial-ui Vue:"
          }
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "UNPKG CDN"
          },
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "Insert the script file to the HTML along with Vue and your styles:"
          }
        }
      },
      {
        "type": "code",
        "data": {
          "code": "\n<!DOCTYPE html>\n<html>\n<head>\n  <!-- Import your styles -->\n  <link href=\"https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css\" rel=\"stylesheet\">\n</head>\n<body>\n<div id=\"app\">\n  <iui-button>Hello, world!</iui-button>\n</div>\n</body>\n<!-- Import Vue -->\n<script src=\"https://unpkg.com/vue/dist/vue.js\"></script>\n\n<!-- \n  Create Industrial-ui configuration.\n  It is important to have exactly IuiConfig variable name!\n-->\n<script>\n  const IuiConfig = {\n    globalClass: '',\n    components: { ... },\n    },\n  };\n</script>\n\n<!-- Import industrial-ui-vue and register as a Vue plugin -->\n<script src=\"https://unpkg.com/industrial-ui-vue\"></script>\n\n<!-- Initialize Vue app -->\n<script>\n  new Vue({\n    el: '#app',\n  })\n</script>\n</html>"
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "NPM with local imports"
          },
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "This is the recommended way to install the library. It doesn't require you to use all components saving some space in the output bundle of your application."
          }
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "Firstly, do:"
          }
        }
      },
      {
        "type": "code",
        "data": {
          "code": "\nnpm i industrial-ui-vue"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "You need to register the Industrial-ui plugin that would expose the <code class=\"inline-code\">$iui</code> instance into Vue virtual machine. Create a config file and install the plugin into the Vue entry:"
          }
        }
      },
      {
        "type": "code",
        "data": {
          "code": "\nimport Vue from 'vue';\nimport config from './config';\nimport {iui} from 'industrial-ui-vue';\n\nVue.use(iui, config);"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "In any template file, you can now directly import needed components and use them as you like:"
          }
        }
      },
      {
        "type": "code",
        "data": {
          "code": "\n<template>\n  <Dropdown>\n    <template #trigger>\n      <Button>Click on me</Button>\n    </template>\n    Hello, world!\n  </Dropdown>\n</template>\n\n<script>\n  import { IuiDropdown as Dropdown, IuiButton as Button } from 'industrial-ui-vue';\n  export default {\n    components: { Dropdown, Button },\n  };\n</script>"
        }
      },
      {
        "type": "header",
        "data": {
          "text": {
            "default": "As a global plugin"
          },
          "level": 2
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "In this case, Industrial-ui would be registered globally, and all components will be imported at once."
          }
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "Firstly, do:"
          }
        }
      },
      {
        "type": "code",
        "data": {
          "code": "\nnpm i industrial-ui-vue"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "Install the IUI plugin with your&nbsp;<a href=\"/lang/configuration\">configuration</a>. Go to the main vue file and do:"
          }
        }
      },
      {
        "type": "code",
        "data": {
          "code": "\nimport Vue from 'vue';\nimport config from './config';\nimport iui from 'industrial-ui-vue';\n\nVue.use(iui, config);"
        }
      },
      {
        "type": "paragraph",
        "data": {
          "text": {
            "default": "Now, you are ready to use components inside the app:"
          }
        }
      },
      {
        "type": "code",
        "data": {
          "code": "\n<template>\n  <iui-dropdown>\n    <template #trigger>\n      <iui-button>Click on me</iui-button>\n    </template>\n    Hello, world!\n  </iui-dropdown>\n</template>"
        }
      }
    ]
  }
};

export default article;
