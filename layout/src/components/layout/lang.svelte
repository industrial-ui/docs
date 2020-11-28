<script lang="ts">
  import { fade } from 'svelte/transition';
  import languages from 'common/languages';
  import capitalize from 'common/capitalize';
  import {dispatch} from 'common/dispatch';

  export let lang: string|null;

  const change = (e: Event) => {
    lang = (e.target as HTMLSelectElement).value;
    dispatch('iui-language', lang, true);
  };
</script>

<div class="lang-switch">
  {#if lang !== null}
    <select in:fade={{duration: 300}} bind:value={lang} on:change={change}>
      {#each languages as lan}
        <option value={lan}>{capitalize(lan)}</option>
      {/each}
    </select>
  {/if}
</div>

<style>
  div {
    width: 3rem;
    margin-right: 0.75rem;
  }

  select {
    width: 100%;
    border: none;
    background: transparent;
    color: var(--text-color-primary);
    text-transform: uppercase;
    display: block;
    cursor: pointer;
  }
  select:focus {
    outline: none;
  }
</style>
