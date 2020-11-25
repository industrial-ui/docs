<script>
  import {createEventDispatcher} from 'svelte';
  import navigation from '../../../../common/navigation';
  import Link from './link.svelte';

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
          <Link to="/eng/{route.slug}" on:click={() => dispatch('close')}>
            {route.name}
          </Link>
        </li>
      {/each}
    </ul>
  </div>
{/each}
