<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  import navigation from 'common/navigation';
  import Lang from './lang.svelte';
  import getTranslation from 'common/get-translation';

  export let lang: string|null;

  const dispatch = createEventDispatcher();
</script>

<Lang bind:lang />

{#each navigation as group}
  <div class="route">
    <header>
      {getTranslation(group.name)}
    </header>
    <ul>
      {#each group.nested as route}
        <li>
          <a href="/eng/{route.slug}" on:click={() => dispatch('close')}>
            {getTranslation(route.name)}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/each}
