<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  import navigation from 'common/navigation';
  import Lang from './lang.svelte';

  export let lang: string|null;

  const dispatch = createEventDispatcher();
</script>

<Lang bind:lang />

{#each navigation as group}
  <div class="route">
    <header>
      {group.name}
    </header>
    <ul>
      {#each group.nested as route}
        <li>
          <a href="/eng/{route.slug}" on:click={() => dispatch('close')}>
            {route.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/each}
