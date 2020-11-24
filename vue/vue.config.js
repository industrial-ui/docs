const languages = ['rus', 'eng'];
const pages = ['button', 'dropdown'];

const dynamicRoutes = languages.map((lang) => pages.map((page) => `/docs/${lang}/${page}`)).flat();

module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        ...dynamicRoutes,
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
};
