export default {
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
        "slug": "unpkg",
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
        "codeLang": "html",
        "code": "\n<span class=\"token doctype\"><span class=\"token punctuation\">&lt;!</span><span class=\"token doctype-tag\">DOCTYPE</span> <span class=\"token name\">html</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token comment\">&lt;!-- Import your styles --></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>app<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>iui-button</span><span class=\"token punctuation\">></span></span>Hello, world!<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>iui-button</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">></span></span>\n<span class=\"token comment\">&lt;!-- Import Vue --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>https://unpkg.com/vue/dist/vue.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\">&lt;!-- \n  Create Industrial-ui configuration.\n  It is important to have exactly IuiConfig variable name!\n--></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n  <span class=\"token keyword\">const</span> IuiConfig <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    globalClass<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\">&lt;!-- Import industrial-ui-vue and register as a Vue plugin --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>https://unpkg.com/industrial-ui-vue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token script\"></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\">&lt;!-- Initialize Vue app --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n  <span class=\"token keyword\">new</span> <span class=\"token class-name\">Vue</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    el<span class=\"token operator\">:</span> <span class=\"token string\">'#app'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">></span></span>",
      }
    },
    {
      "type": "header",
      "data": {
        "slug": "npm-local-imports",
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
        "codeLang": "bash",
        "code": "\n<span class=\"token function\">npm</span> i industrial-ui-vue",
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
        "codeLang": "javascript",
        "code": "\n<span class=\"token keyword\">import</span> Vue <span class=\"token keyword\">from</span> <span class=\"token string\">'vue'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> config <span class=\"token keyword\">from</span> <span class=\"token string\">'./config'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>iui<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'industrial-ui-vue'</span><span class=\"token punctuation\">;</span>\n\nVue<span class=\"token punctuation\">.</span><span class=\"token function\">use</span><span class=\"token punctuation\">(</span>iui<span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>",
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
        "codeLang": "html",
        "code": "\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Dropdown</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span> <span class=\"token attr-name\">#trigger</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Click on me<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n    Hello, world!\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dropdown</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n  <span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> IuiDropdown <span class=\"token keyword\">as</span> Dropdown<span class=\"token punctuation\">,</span> IuiButton <span class=\"token keyword\">as</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'industrial-ui-vue'</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span> Dropdown<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>",
      }
    },
    {
      "type": "header",
      "data": {
        "slug": "global-plugin",
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
        "codeLang": "bash",
        "code": "\n<span class=\"token function\">npm</span> i industrial-ui-vue",
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
        "codeLang": "javascript",
        "code": "\n<span class=\"token keyword\">import</span> Vue <span class=\"token keyword\">from</span> <span class=\"token string\">'vue'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> config <span class=\"token keyword\">from</span> <span class=\"token string\">'./config'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> iui <span class=\"token keyword\">from</span> <span class=\"token string\">'industrial-ui-vue'</span><span class=\"token punctuation\">;</span>\n\nVue<span class=\"token punctuation\">.</span><span class=\"token function\">use</span><span class=\"token punctuation\">(</span>iui<span class=\"token punctuation\">,</span> config<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>",
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
        "codeLang": "html",
        "code": "\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>iui-dropdown</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span> <span class=\"token attr-name\">#trigger</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>iui-button</span><span class=\"token punctuation\">></span></span>Click on me<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>iui-button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n    Hello, world!\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>iui-dropdown</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>",
      }
    }
  ]
}
