<template>
  <div>
    <div id="nav">
      <router-link to="/main">Main</router-link> |
      <router-link to="/docs/eng/dropdown">Dropdown</router-link> |
      <router-link to="/docs/rus/button">Button</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    mounted () {
      window.addEventListener('iui-redirect', () => {
        this.$router.push(sessionStorage.getItem('iui-redirect') || '/main');
      });
    },
  });
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
