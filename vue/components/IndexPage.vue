<template>
  <Layout index>
    <div class="logo">
      <img src="/img/logo.png" alt="Industrial-ui logo" />
    </div>
    <h1>Industrial-ui Vue</h1>

    <nuxt-link v-if="lang" class="link" :to="`/${lang}/installation`">{{ t[lang] }}</nuxt-link>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from './Layout.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Layout,
  },
  data () {
    return {
      t: {
        eng: 'Get started',
        rus: 'Начать',
      },
    };
  },
  computed: {
    lang () {
      return this.$route.params.lang;
    },
  },
});
</script>

<style>
.index-page .logo {
  width: 192px;
  height: 192px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-logo);
  transition: background-color .3s;
}
.index-page img {
  height: 125px;
}

.index-page h1 {
  color: var(--text-color-primary);
  transition: color .3s;
}

.index-page .link {
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.75rem 1.5rem;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.5rem;
  border-color: var(--text-color-primary);
  color: var(--text-color-primary);
  text-transform: uppercase;
  transition: all .3s;
}
</style>
