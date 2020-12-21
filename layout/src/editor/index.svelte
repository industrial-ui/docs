<script lang="ts">
  import {onMount} from 'svelte';
  import createEditor from '../components/editor/create-editor';
  import RulesOverlay from '../components/editor/rules-overlay.svelte';

  let overlay: boolean = false;
  let loadingMain = true;
  let editorMain = null;

  onMount(async () => {
    const rulesRead = localStorage.getItem('iui-editor-rules');
    overlay = !rulesRead;

    editorMain = await createEditor({
      holder: 'editor-main',
      autofocus: true,
      placeholder: 'Start writing the article here...',
      onReady: () => loadingMain = false,
    });

    window.addEventListener('paste', (event) => {
      const textFromPaste = event.clipboardData.getData('text/plain');
      try {
        // Means the editor.js content was passed
        const data = JSON.parse(textFromPaste);
        if (data && data.blocks && data.version && data.time) {
          event.preventDefault();
          const closestEditor = (event && event.target.closest('#editor-translate')) ? editorTranslation : editorMain;
          closestEditor.render(data);
        }
      } catch (_) {
        console.warn('Paste unsuccessful with content:', textFromPaste.substring(0, 64) + '...');
      }
    });
  });

  let saved: number|null = null;
  const save = () => {
    editorMain.save().then((data) => {
      if (navigator.clipboard) navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      saved = setTimeout(() => saved = null, 3000);
    });
  };

  let translating: boolean = false;
  let loadingTranslation: boolean = false;
  let editorTranslation = null;
  const translate = async () => {
    editorMain.readOnly.toggle();
    if (translating) {
      translating = false;
      return;
    }

    translating = true;
    if (!editorTranslation) {
      loadingTranslation = true;
      editorTranslation = createEditor({
        holder: 'editor-translate',
        autofocus: true,
        placeholder: 'Start writing the article here',
        onReady: () => loadingTranslation = false,
      });
    }
  };
</script>

<div id="editor" class:overlay-open={overlay}>
  <div class="left" class:open={translating}>
    {#if loadingTranslation}
      <p class="loading">
        The Editor is loading. Please, wait...
      </p>
    {/if}
    <article id="editor-translate" />
  </div>

  <div class="right">
    {#if loadingMain}
      <p class="loading">
        The Editor is loading. Please, wait...
      </p>
    {/if}
    <article id="editor-main" />
  </div>

  <div class="toolbar">
    <button class="translate-button" type="button" on:click={translate}>{translating ? 'Close translation' : 'Translate'}</button>
    <button type="button" on:click={save}>{saved ? 'Saved' : 'Save'}</button>
    <button type="button" on:click={() => overlay = true}>?</button>
  </div>

  <RulesOverlay bind:overlay />
</div>

<style>
  #editor {
    z-index: 3;
    height: calc(100% - 3.7rem);
    padding: 1.5rem 1rem;
    color: var(--text-color-primary);
    transition: color .3s;
  }

  #editor.overlay-open {
    overflow-y: hidden;
  }

  .left {
    display: none;
    width: 50%;
  }
  .right {
    width: 90%;
    margin: 0 auto;
  }
  .left, .right {
    padding: 1.5rem 3rem;
  }
  .loading {
    color: var(--text-color-secondary);
    transition: .3s;
  }

  .left.open {
    display: block;
  }
  .left.open + .right {
    width: 50%;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: var(--hr-color);
    transition: border-left-color .3s;
  }

  .toolbar {
    position: absolute;
    top: 0;
    right: 0;
    border: 1px solid;
    border-top: none;
    border-color: var(--border-color);
    background-color: var(--bg-nav);
    transition: background-color .3s;
  }

  .toolbar button {
    border: none;
    padding: 0.75rem 1rem;
    background-color: transparent;
    cursor: pointer;
    color: var(--text-color-secondary);
    transition: color .3s;
  }

  .toolbar button:focus {
    outline: none;
  }
  .toolbar button:hover {
    background-color: var(--bg-color-hover);
    color: white;
  }

  @media screen and (max-width: 1024px) {
    .toolbar .translate-button, .left {
      display: none;
    }
    .right {
      width: 100%;
      padding: 1.5rem 0;
    }
  }

  @media screen and (min-width: 768px) {
    .right {
      width: 50%;
    }
  }
</style>
