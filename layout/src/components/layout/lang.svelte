<script lang="ts">
  import { fade } from 'svelte/transition';
  import {onMount} from 'svelte';
  import languages from '../../../../common/languages';
  import capitalize from '../../../../common/capitalize';

  let loaded = false;
  let lang = null;

  onMount(() => {
    loaded = true;
    const {pathname} = location;
    lang = languages.find((lan) => pathname.includes(`/${lan}`)) || null;
  });

  const change = (e: Event) => {
    lang = (e.target as HTMLSelectElement).value;
    window.dispatchEvent(new CustomEvent('iui-language', {
      detail: { lang },
    }));
    localStorage.setItem('iui-language', lang);
  };
</script>

<div>
  {#if loaded}
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
