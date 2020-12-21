/**
 * Thanks to the https://github.com/editor-js/simple-image-tutorial/blob/master/simple-image.js
 * for this simple image Editorjs plugin tutorial
 */

export default class SimpleImage {
  static get toolbox () {
    return {
      title: 'Image',
      icon: `
<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg">
  <path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/>
</svg>`
    };
  }

  static get pasteConfig () {
    return {
      tags: ['IMG'],
      files: {
        mimeTypes: ['image/*'],
        extensions: ['gif', 'jpg', 'png'],
      },
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i,
      },
    };
  }

  static get sanitize () {
    return {
      url: {},
      caption: {
        b: true,
        a: {
          href: true
        },
        i: true
      }
    }
  }

  constructor ({data, api, config}) {
    this.api = api;
    this.config = config || {};
    this.data = {
      url: data.url || '',
      caption: data.caption || '',
    };
    this.wrapper = undefined;
  }

  render () {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('simple-image');

    if (this.data && this.data.url){
      this._createImage(this.data.url, this.data.caption);
      return this.wrapper;
    }

    const input = document.createElement('input');

    input.placeholder = this.config.placeholder || 'Paste an image URL...';
    input.addEventListener('paste', (event) => {
      this._createImage(event.clipboardData.getData('text'));
    });

    this.wrapper.appendChild(input);

    return this.wrapper;
  }

  _createImage (url, captionText) {
    const image = document.createElement('img');
    const caption = document.createElement('div');

    image.src = url;
    caption.contentEditable = true;
    caption.innerHTML = captionText || '';

    this.wrapper.innerHTML = '';
    this.wrapper.appendChild(image);
    this.wrapper.appendChild(caption);
  }

  save (blockContent) {
    const image = blockContent.querySelector('img');
    const caption = blockContent.querySelector('[contenteditable]');

    return Object.assign(this.data, {
      url: image.src,
      caption: caption.innerHTML || ''
    });
  }

  validate (savedData) {
    if (!savedData.url.trim()){
      return false;
    }
    return true;
  }

  _toggleTune (tune) {
    this.data[tune] = !this.data[tune];
  }

  onPaste (event) {
    switch (event.type){
      case 'tag':
        const imgTag = event.detail.data;
        this._createImage(imgTag.src);
        break;
      case 'file':
        /* We need to read file here as base64 string */
        const file = event.detail.file;
        const reader = new FileReader();

        reader.onload = (loadEvent) => {
          this._createImage(loadEvent.target.result);
        };

        reader.readAsDataURL(file);
        break;
      case 'pattern':
        const src = event.detail.data;

        this._createImage(src);
        break;
    }
  }

  static get isReadOnlySupported() {
    return true;
  }
}
