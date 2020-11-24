<template>
  <div>
    <div id="nav">
      <router-link to="/index">Index</router-link> |
      <router-link to="/docs/eng/dropdown">Dropdown</router-link> |
      <router-link to="/docs/rus/button">Button</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
