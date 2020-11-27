<template>
  <Layout class="index-page">
    <div class="logo">
      <img src="/img/logo.png" alt="Industrial-ui logo" />
    </div>
    <h1>Industrial-ui Vue</h1>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Layout from '../components/Layout.vue'

  export default Vue.extend({
    components: {
      Layout,
    },
    mounted () {
      const lang = localStorage.getItem('iui-language') || 'eng';
      this.$router.push(`/${lang}`);
    },
  });
</script>

<style>
  .index-page {
    padding: 2rem;
    align-items: center;
    min-height: 100%;
  }

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
</style>
