<template>
  <!--
    This is a non-rendering /index.html, which is always pointed to Index.vue
  -->
  <div />
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    beforeRouteEnter (to, from, next) {
      next({name: 'index'});
    },
  });
</script>
