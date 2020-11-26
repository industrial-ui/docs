<script>
  import {createEventDispatcher} from 'svelte';
  import navigation from '../../../../common/navigation';

  const dispatch = createEventDispatcher();
</script>

{#each navigation as group}
  <div>
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
