<template>
  <IndexPage />
</template>

<script lang="ts">
import Vue from 'vue';
import IndexPage from '~/components/IndexPage.vue';
import {dispatch, LANGUAGE_EVENT} from '../../common/dispatch';

export default Vue.extend({
  components: {IndexPage},
  mounted () {
    const lang = localStorage.getItem(LANGUAGE_EVENT) || 'eng';
    dispatch(LANGUAGE_EVENT, lang);
    this.$router.push(`/${lang}`);
  },
});
</script>
