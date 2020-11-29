<script lang="ts">
  import type {SupportedLanguages} from 'common/types';
  import Lang from './lang.svelte';
  import Burger from './burger.svelte';
  import Sunshine from './sunshine.svelte';
  import GitHub from '../github.svelte';
  import {dispatch, LINK_EVENT} from 'common/dispatch';

  export let open: boolean;
  export let lang: SupportedLanguages|''|null;

  const clickLink = (e: Event) => {
    e.preventDefault();
    dispatch(LINK_EVENT, `/${lang}`);
  };
</script>

<div class="left">
  <a href="/{lang}" on:click={clickLink}>
    <div class="logo">
      <h2>Industrial-ui</h2>
    </div>
  </a>
</div>

<div class="right">
  <Lang bind:lang />

  <Sunshine />
  <a href="https://github.com/industrial-ui" target="_blank" rel="noreferrer noopener">
    <GitHub />
  </a>
  <Burger bind:open={open} />
</div>
