<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let loaded: boolean = false;
  let dark: boolean = false;
  onMount(() => {
    loaded = true;
    dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const change = (event: Event) => dark = (event.target as HTMLInputElement).checked;
  $: {
    if (typeof window !== 'undefined') {
      if (dark) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      }
    }
  }
</script>

<label>
  <input type="checkbox" checked={dark} on:change={change}>
  {#if loaded}
    {#if dark}
      <i in:fade={{duration: 300}} class="sun" />
    {:else}
      <i in:fade={{duration: 300}} class="moon" />
    {/if}
  {/if}
</label>

<style>
  label {
    margin-right: 1rem;
    cursor: pointer;
  }

  input {
    display: none;
  }

  i {
    color: var(--text-color-primary);
  }

  .sun {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    background:
      linear-gradient(to bottom,
      currentColor 4px,transparent 0)
      no-repeat 5px -6px/2px 6px,
      linear-gradient(to bottom,
      currentColor 4px,transparent 0)
      no-repeat 5px 14px/2px 6px,
      linear-gradient(to bottom,
      currentColor 4px,transparent 0)
      no-repeat -8px 5px/6px 2px,
      linear-gradient(to bottom,
      currentColor 4px,transparent 0)
      no-repeat 14px 5px/6px 2px;
    border-radius: 100px;
    box-shadow: inset 0 0 0 2px;
    border: 6px solid transparent
  }
  .sun::after,
  .sun::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 2px;
    border-right: 4px solid;
    border-left: 4px solid;
    left: -6px;
    top: 5px
  }
  .sun::before {
    transform: rotate(-45deg)
  }
  .sun::after {
    transform: rotate(45deg)
  }

  .moon,
  .moon::after {
    display: block;
    box-sizing: border-box;
    border-radius: 50%
  }
  .moon {
    overflow: hidden;
    position: relative;
    transform: rotate(-135deg);
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-bottom-color: transparent;
  }
  .moon::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 18px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    top: 8px;
    left: 2px
  }
</style>
