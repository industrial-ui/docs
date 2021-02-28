<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  import type {SupportedLanguages} from 'common/types';
  import {dispatch, LINK_EVENT} from 'common/dispatch';
  import getTranslation from 'common/get-translation';
  import navigation from 'common/articles/navigation';
  import Lang from './lang.svelte';

  export let lang: SupportedLanguages|''|null;

  const dispatchEvent = createEventDispatcher();
  const clickLink = (e: Event, slug: string) => {
    e.preventDefault();
    dispatch(LINK_EVENT, `/${lang}/${slug}`);
    dispatchEvent('close');
  };
</script>

<Lang bind:lang />

{#each navigation as group}
  <div class="route">
    <header>
      {getTranslation(group.name, lang)}
    </header>
    <ul>
      {#each group.nested as route}
        <li>
          <a href="/{lang}/{route.slug}" on:click={(e) => clickLink(e, route.slug)}>
            {getTranslation(route.name, lang)}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/each}
