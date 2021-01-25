<template>
  <main :class="{'index-page': index}" class="app-layout">
    <section>
      <slot />

      <div class="grow" />

      <Footer />
    </section>

    <aside>
      <template v-if="article && article.contents && article.contents.length">
        <h3>Contents</h3>
        <ul>
          <li
              v-for="content in article.contents"
              :key="content.slug"
          >
            <nuxt-link :to="`#${content.slug}`">
              {{ content.name }}
            </nuxt-link>
          </li>
        </ul>
      </template>
    </aside>
  </main>
</template>

<script lang="ts">
  import Vue, {PropType} from 'vue';
  import Footer from './Footer.vue';
  import {ArticleType} from '../../common/types';

  export default Vue.extend({
    name: 'Layout',
    components: {
      Footer,
    },
    props: {
      index: {
        type: Boolean,
        default: false,
      },
      article: {
        type: Object as PropType<ArticleType>,
        default: null,
      },
    },
  });
</script>

<style>
  .app-layout {
    display: flex;
    min-height: 100%;
  }

  .app-layout > section {
    display: flex;
    flex-direction: column;
    width: calc(100vw / 12 * 8);
    padding: 1rem 4rem;
  }

  .app-layout .grow {
    flex-grow: 1;
  }

  .app-layout > aside {
    position: sticky;
    top: 0;
    width: calc(100vw / 12 * 2);
    height: 100%;
    padding-top: 1.5rem;
  }

  .app-layout > aside h3 {
    margin: 0;
    padding-left: .7rem;
    color: var(--text-color-secondary);
    font-size: .8em;
    font-weight: 400;
    text-decoration: underline;
    text-transform: uppercase;
    line-height: 2em;
  }

  .app-layout > aside ul {
    list-style-type: none;
    padding: 0;
    margin: 0.5rem 0 0;
  }

  .app-layout > aside ul a {
    display: block;
    width: inherit;
    height: inherit;
    padding: .05rem 0 .05rem .7rem;
    color: var(--text-color-secondary);
    font-size: .85em;
    font-weight: 300;
    line-height: 1.8em;
    transition: color .2s;
  }
  .app-layout > aside ul a:hover {
    color: var(--text-color-primary);
  }

  @media screen and (max-width: 1024px) {
    .app-layout > section {
      width: 100%;
      padding: 1rem 1rem;
    }
    .app-layout > aside {
      display: none;
    }
  }

  .app-layout.index-page > aside {
    display: none;
  }
  .app-layout.index-page > section {
    align-items: center;
    width: 100%;
    min-height: 100%;
    padding: 2rem;
  }
</style>
