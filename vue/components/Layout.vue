<template>
  <main :class="{'index-page': index}" class="app-layout">
    <section>
      <slot />

      <div class="grow" />

      <Footer />
    </section>
    <aside>

    </aside>
  </main>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Footer from './Footer.vue';

  export default Vue.extend({
    name: 'Layout',
    components: {
      Footer,
    },
    props: {
      index: {
        type: Boolean,
        default: false,
      }
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

  .app-layout > aside {
    position: sticky;
    top: 0;
    width: calc(100vw / 12 * 2);
  }

  .app-layout .grow {
    flex-grow: 1;
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
