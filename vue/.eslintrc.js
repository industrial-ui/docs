module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  ignorePatterns: ['build', 'static', 'public'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
