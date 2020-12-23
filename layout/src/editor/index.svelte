<script lang="ts">
  import {onMount} from 'svelte';
  import createEditor from '../components/editor/create-editor';
  import RulesOverlay from '../components/editor/rules-overlay.svelte';
  import {editorOutputToProxy, editorProxyToInput} from '../components/editor/editor-output';
  import type {OutputData} from '@editorjs/editorjs';

  let overlay: boolean = false;
  let editorMain = null;
  let editorTranslation = null;
  let loadingMain = true;
  let loadingTranslation: boolean = false;
  let translating: boolean = false;
  let saved: number|null = null;
  let lastSavedData: OutputData|null = null;

  onMount(async () => {
    const rulesRead = localStorage.getItem('iui-editor-rules');
    overlay = !rulesRead;

    editorMain = await createEditor({
      holder: 'editor-main',
      autofocus: true,
      placeholder: 'Start writing the article here...',
      onReady: () => loadingMain = false,
    });

    window.addEventListener('paste', async (event) => {
      const textFromPaste = event.clipboardData.getData('text/plain');
      try {
        // Means the editor.js content was passed
        const data = JSON.parse(textFromPaste);
        if (data && data.blocks && data.version && data.time) {
          event.preventDefault();
          if (translating) {
            (await editorTranslation as any).render(editorProxyToInput(data, 'ru'));
          } else {
            (await editorMain as any).render(editorProxyToInput(data, 'ru'));
          }
        }
      } catch (_) {
        console.warn('Paste unsuccessful with content:', textFromPaste.substring(0, 64) + '...');
      }
    });
  });

  const save = async () => {
    if (!translating) {
      const data = await editorMain.save();
      if (navigator.clipboard) await navigator.clipboard.writeText(
        JSON.stringify(editorOutputToProxy(data), null, 2)
      );
      saved = setTimeout(() => saved = null, 3000);
    } else {
      const data = await (await editorTranslation).save();
      if (navigator.clipboard) await navigator.clipboard.writeText(
        JSON.stringify(editorOutputToProxy(lastSavedData, {lang: 'ru', translation: data}), null, 2)
      );
      saved = setTimeout(() => saved = null, 3000);
    }
  };

  const translate = async () => {
    if (translating) {
      translating = false;
      editorMain.readOnly.toggle();
      return;
    }

    translating = true;
    if (!editorTranslation) {
      const data = await editorMain.save();
      lastSavedData = data;

      loadingTranslation = true;
      editorTranslation = createEditor({
        holder: 'editor-translate',
        autofocus: true,
        data,
        placeholder: 'Start writing the article here',
        onReady: () => loadingTranslation = false,
      });

      editorMain.readOnly.toggle();
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
