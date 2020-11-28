<script lang="ts">
  import Lang from './lang.svelte';
  import Burger from './burger.svelte';
  import Sunshine from './sunshine.svelte';
  import GitHub from '../github.svelte';

  export let open: boolean;
  export let lang: string|null;
</script>

<div class="left">
  <a href="/">
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
