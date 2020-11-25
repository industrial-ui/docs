<script lang="ts">
  import {createEventDispatcher} from 'svelte';

  export let to: string;

  const dispatch = createEventDispatcher();

  /**
   * Sets the redirect route to the sessionStorage and generates the synthetic event
   * for main micro-frontend part to handle and redirect with their router.
   */
  const redirect = (e: MouseEvent) => {
    e.preventDefault();

    sessionStorage.setItem('iui-redirect', to);
    window.dispatchEvent(new CustomEvent('iui-redirect'));

    dispatch('click', e);
  };
</script>

<a href={to} on:click={redirect} rel="prefetch">
  <slot />
</a>
