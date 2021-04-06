import languages from '../common/languages';
import articles from '../common/articles';

const routes = languages
  .map((lang) =>
    Object.keys(articles).map((article) => `/${lang}/${article}`)
  ).flat();

export default {
  target: 'static',
  head: {
    title: 'Industrial-ui Vue',
  },

  css: [
    './styles/docs.css',
    './styles/content.css',
    './styles/showcase.css',
    './styles/prism.css',
    './styles/ui.css',
  ],
  plugins: [
    './plugins/translation.ts',
    './plugins/iui.ts'
  ],
  components: false,
  buildModules: [
    '@nuxt/typescript-build'
  ],
  build: {},
  generate: {
    crawler: false,
    routes: ['/', ...languages.map(lang => `/${lang}`), ...routes],
  },
}
