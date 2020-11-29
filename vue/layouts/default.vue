<template>
  <Nuxt />
</template>

<script lang="ts">
  import Vue from 'vue';
  import {dispatch, LANGUAGE_EVENT, LINK_EVENT, subscribe} from '../../common/dispatch';

  export default Vue.extend({
    mounted () {
      // On initial load, send to the Layout micro-frontend the information about current language
      if (this.$route.params.lang) dispatch(LANGUAGE_EVENT, this.$route.params.lang);

      // After, subscribe to the language change coming from the layout
      subscribe(LANGUAGE_EVENT, (lang) => {
        const page = this.$route.params.page || '';
        this.$router.push(`/${lang}/${page}`);
      });

      // Subscribe on the link click from the sidebar and route to the proper Nuxt page
      subscribe(LINK_EVENT, (link) => {
        this.$router.push(link);
      });
    },
  });
</script>
