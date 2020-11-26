<template>
  <div class="app-layout">
    <slot />

    <div class="grow" />

    <Footer />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Footer from './Footer.vue';

  export default Vue.extend({
    name: 'Layout',
    components: {
      Footer,
    },
  });
</script>

<style>
  .app-layout {
    display: flex;
    flex-direction: column;
  }

  .app-layout .grow {
    flex-grow: 1;
  }
</style>
