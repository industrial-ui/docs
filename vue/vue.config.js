const languages = require('../common/languages');
const components = require('../common/components');

const dynamicRoutes = languages
  .map((lang) => components.map((page) => `/docs/${lang}/${page}`))
  .flat();

module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/main',
        ...dynamicRoutes,
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },

  devServer: {
    port: process.env.PORT || 3000,
  },
};
