<template>
  <Nuxt />
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    mounted () {

      window.addEventListener('iui-language', (e: Event) => {
        const page = this.$route.params.page || '';
        this.$router.push(`/${(e as unknown as {detail: {lang: string}}).detail.lang}/${page}`);
      });
    },
  });
</script>
