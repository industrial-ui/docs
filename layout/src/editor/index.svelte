<script lang="ts">
  import {onMount} from 'svelte';
  import createEditor from '../components/editor/create-editor';
  import RulesOverlay from '../components/editor/rules-overlay.svelte';
  import {editorOutputToProxy, editorProxyToInput} from '../components/editor/editor-output';
  import type {OutputBlockData, OutputData} from '@editorjs/editorjs';
  import type {ArticleProxyType} from '../../../common/types';
  import allArticles from '../../../common/articles';

  let overlay: boolean = false;
  let editorMain = null;
  let editorTranslation = null;
  let loadingMain = true;
  let loadingTranslation: boolean = false;
  let translateDd: boolean = false;
  let translating: boolean = false;
  let translatingLang: string = '';
  let pastedArticle: ArticleProxyType|null = null;
  let usedLanguages: string[] = [];
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

    await editorMain.isReady;
    const queryParams = new URLSearchParams(window.location.search);
    const articleParam = queryParams.get('article');
    if (articleParam) {
      const article = allArticles[articleParam];
      if (article) {
        const data = (await article());
        const input = editorProxyToInput(data.default.article as OutputData, 'default');
        editorMain.render(input);
      }
    }

    window.addEventListener('paste', async (event) => {
      const textFromPaste = event.clipboardData.getData('text/plain');
      try {
        // Means the editor.js content was passed
        const data: Partial<ArticleProxyType> = JSON.parse(textFromPaste);
        if (data && data.blocks && data.version && data.time && data.languages) {
          event.preventDefault();
          pastedArticle = JSON.parse(textFromPaste) as ArticleProxyType;
          if (translating) {
            (await editorTranslation as any).render(editorProxyToInput(data as OutputData, translatingLang));
          } else {
            usedLanguages = data.languages;
            (await editorMain as any).render(editorProxyToInput(data as OutputData, 'default'));
          }
        }
      } catch (_) {
        console.warn('Paste unsuccessful with content:', textFromPaste.substring(0, 64) + '...');
      }
    });
  });

  // Get the article data, so all the languages previously used are kept in place
  const saveWithTranslation = (data: OutputData): ArticleProxyType => {
    let article;
    if (pastedArticle && usedLanguages.length) {
      usedLanguages.forEach((lang) => {
        article = editorOutputToProxy(data, {lang, translation: pastedArticle});
      });
    } else {
      article = editorOutputToProxy(data);
    }

    return article;
  }

  const save = async () => {
    if (!translatingLang) {
      const data = await editorMain.save();
      const article = saveWithTranslation(data);

      if (navigator.clipboard) await navigator.clipboard.writeText(
        JSON.stringify(article, null, 2)
      );
      saved = setTimeout(() => saved = null, 3000);
    } else {
      const data: OutputData = await (await editorTranslation).save();
      const article = saveWithTranslation(data);

      let errs: string[] = [];
      if (article.blocks.length !== lastSavedData.blocks.length) errs.push('The amount of blocks in both editors has to be the same!');
      lastSavedData.blocks.forEach((block, index) => {
        const tblock: OutputBlockData|null = article.blocks.length > index ? article.blocks[index] : null;
        if (tblock && block.type !== tblock.type) errs.push(`The type of the block number ${index+1} is "${block.type}", while in the translation it's "${tblock.type}".`);
      });
      if (errs.length) {
        alert(errs.join('\n') + '\n\nFix before saving!');
        return;
      }

      if (navigator.clipboard) await navigator.clipboard.writeText(
        JSON.stringify(editorOutputToProxy(lastSavedData, {lang: translatingLang, translation: data}), null, 2)
      );
      saved = setTimeout(() => saved = null, 3000);
    }
  };

  const translateDdToggle = () => {
    translateDd = !translateDd;
  };

  const translate = async (lang: string = '') => {
    if (translating) {
      translating = false;
      editorMain.readOnly.toggle();
      return;
    }

    translatingLang = lang;
    translating = true;
    if (!editorTranslation) {
      const data = await editorMain.save();
      lastSavedData = saveWithTranslation(data);

      loadingTranslation = true;
      editorTranslation = createEditor({
        holder: 'editor-translate',
        autofocus: true,
        data: (pastedArticle && usedLanguages.includes(lang)) ? editorProxyToInput(pastedArticle, lang) : data,
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
    {#if translating}
      <button class="translate-button" type="button" on:click={translate}>
        Close translation
      </button>
    {:else if translatingLang}
      <button class="translate-button" type="button" on:click={translate}>
        Open translation
      </button>
    {:else}
      <div class="dd">
        <button class="translate-button" type="button" on:click={translateDdToggle}>
          Translate
        </button>
        {#if translateDd}
          <div>
            <ul>
              {#each usedLanguages as lang}
                <li on:click={() => translate(lang)}>{lang}</li>
              {/each}
              <li class="inp">
                <input
                  placeholder="new"
                  type="text"
                  maxlength="3"
                  on:keypress={e => e.key === 'Enter' ? translate(e.target.value) : null}
                />
              </li>
            </ul>
          </div>
        {/if}
      </div>
    {/if}
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
    display: flex;
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
    font-size: 14px;
    color: var(--text-color-secondary);
    transition: color .3s;
  }

  .toolbar .dd {
    position: relative;
  }

  .toolbar .dd > div {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
  }

  .toolbar .dd ul {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    border-color: var(--border-color);
    background-color: var(--bg-nav);
    transition: background-color .3s, border-color .3s;
  }

  .toolbar .dd li {
    padding: .5rem 0;
    text-align: center;
    cursor: pointer;
    font-size: 13px;
  }

  .toolbar .dd li.inp {
    padding: 0;
  }
  .toolbar .dd li.inp input {
    text-align: center;
    padding: .5rem 1rem;
    width: 100%;
    height: 100%;
  }

  .toolbar button:focus, .toolbar .dd li:focus, .toolbar .dd input:focus {
    outline: none;
  }

  .toolbar button:hover, .toolbar .dd li:not(.inp):hover {
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
