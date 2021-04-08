import {BlockTool, API, BlockToolConstructorOptions, BlockToolData} from '@editorjs/editorjs';
import {
  filterFromPrism,
  highlightCode,
} from './prism';

type OutputCodeBlock = BlockToolData<{
  path: string,
  demoCode: string,
  demoConfig: string
}>;

export default class CodeBlock implements BlockTool {
  api: API
  readOnly: boolean
  placeholder: Record<'path'|'code'|'config', string>
  CSS: {
    baseClass: string,
    input: string,
    wrapper: string,
    textarea: string,
  }
  nodes: {
    holder: HTMLElement|null,
    path: HTMLInputElement|null,
    code: HTMLTextAreaElement|null,
    config: HTMLTextAreaElement|null,
  }
  savedData: OutputCodeBlock|null

  static get isReadOnlySupported () {
    return true;
  }

  static get enableLineBreaks () {
    return true;
  }

  constructor ({ data, config, api, readOnly }: BlockToolConstructorOptions) {
    this.api = api;
    this.readOnly = readOnly;
    this.savedData = null;

    this.placeholder = {
      path: 'path/to/showcase.vue',
      code: 'Code of the showcase',
      config: 'Code of showcase configuration',
    };

    this.CSS = {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      wrapper: 'ce-showcase',
      textarea: 'ce-code__textarea',
    };

    this.nodes = {
      holder: null,
      path: null,
      code: null,
      config: null,
    };

    this.data = {
      path: data.path || '',
      demoCode: data.demoCode || '',
      demoConfig: data.demoConfig || '',
    };

    this.nodes.holder = this.drawView();
  }

  drawView (): HTMLElement {
    const wrapper = document.createElement('div'),
      path = document.createElement('input'),
      code = document.createElement('textarea'),
      config = document.createElement('textarea');

    wrapper.classList.add(this.CSS.baseClass, this.CSS.wrapper);

    path.classList.add(this.CSS.input);
    path.placeholder = this.placeholder.path;
    path.value = this.data.path;

    code.classList.add(this.CSS.textarea, this.CSS.input);
    code.textContent = filterFromPrism(this.data.demoCode);
    code.placeholder = this.placeholder.code;

    config.classList.add(this.CSS.textarea, this.CSS.input);
    config.textContent = filterFromPrism(this.data.demoConfig);
    config.placeholder = this.placeholder.config;
    if (this.readOnly) {
      code.disabled = true;
      config.disabled = true;
    }

    wrapper.appendChild(path);
    wrapper.appendChild(code);
    wrapper.appendChild(config);

    this.nodes.path = path;
    this.nodes.code = code;
    this.nodes.config = config;

    return wrapper;
  }

  render (): HTMLElement {
    return this.nodes.holder as HTMLElement;
  }

  save (codeWrapper: HTMLElement) {
    if (!this.nodes.path || !this.nodes.code || !this.nodes.config) return;

    const prismedCode = highlightCode(this.nodes.code.value, 'html');
    const prismedConfig = highlightCode(this.nodes.config.value, 'javascript');

    return {
      path: this.nodes.path.value,
      demoCode: prismedCode,
      demoConfig: prismedConfig,
    };
  }

  get data () {
    return this.savedData as OutputCodeBlock;
  }

  set data (data: OutputCodeBlock) {
    this.savedData = data;

    if (this.nodes.path && data.path) {
      this.nodes.path.value = data.path;
    }
    if (this.nodes.code && data.demoCode) {
      this.nodes.code.textContent = filterFromPrism(data.demoCode);
    }
    if (this.nodes.config && data.demoConfig) {
      this.nodes.config.textContent = filterFromPrism(data.demoConfig);
    }
  }

  static get toolbox () {
    return {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke-width="0"></path><circle cx="12" cy="12" r="3"></circle></svg>',
      title: 'Showcase',
    };
  }

  static get sanitize () {
    return {
      demoCode: true,
      demoConfig: true,
    };
  }
}
