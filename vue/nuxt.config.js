const path = require('path');

export default {
  target: 'static',
  head: {
    title: 'Industrial-ui Vue',
  },

  css: ['./styles/docs.css'],
  plugins: [],
  components: false,
  modules: [],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  build: {},
}
