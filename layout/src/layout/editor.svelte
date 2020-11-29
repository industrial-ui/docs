<script lang="ts">
  import {onMount} from 'svelte';
  import { fade } from 'svelte/transition';

  let overlay: boolean = false;
  let loadingMain = true;
  let editorMain = null;

  onMount(async () => {
    const EditorJS = (await import ('@editorjs/editorjs')).default;
    const Header = (await import ('@editorjs/header')).default;
    const SimpleImage = (await import ('@editorjs/simple-image')).default;
    const Code = (await import ('@editorjs/code')).default;
    const List = (await import ('@editorjs/list')).default;

    editorMain = new EditorJS({
      holder: 'editor-main',
      data: {},
      autofocus: true,
      placeholder: 'Start writing the article here',
      tools: {
        header: Header,
        list: List,
        code: Code,
        image: {
          class: SimpleImage,
          inlineToolbar: true,
          config: {
            placeholder: 'Paste image URL'
          }
        },
      },
      onReady: () => {
        loadingMain = false;
      },
    });
  });
</script>

<div class="main-section">
  <div class="left">
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
    <button type="button">Save</button>
  </div>

  {#if overlay}
    <div class="overlay" transition:fade={{duration: 300}}></div>
  {/if}
</div>

<style>
  .main-section {
    z-index: 3;
    display: flex;
    flex-direction: row;
    color: var(--text-color-primary);
    transition: color .3s;
  }
  .left {
    display: none;
  }
  .right {
    width: 90%;
    margin: 0 auto;
  }
  .left, .right {
    padding: 1.5rem 1rem;
  }
  .loading {
    color: var(--text-color-secondary);
    transition: .3s;
  }

  .toolbar {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--bg-nav);
    transition: background-color .3s;
  }

  .toolbar button {
    border: none;
    padding: 0.75rem 1rem;
    background: transparent;
    cursor: pointer;
    color: var(--text-color-secondary);
    transition: color .3s;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: green;
  }

  @media screen and (min-width: 768px) {
    .right {
      width: 50%;
    }
  }
</style>
