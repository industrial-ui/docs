const fs = require('fs');
const path = require('path');

(function () {
  // Read the app.html file
  let app = fs.readFileSync(path.join(__dirname, '..', 'app.html'), 'utf-8');

  // When needed (before the end of the head and inside of the div#app), insert the templates
  app = app.replace('</head>', '{{HEAD}}</head>');
  app = app.replace('<div id=app></div>', '<div id=app>{{APP}}</div>');

  // Save the updated Nuxt template
  fs.writeFileSync(path.join(__dirname, '..', 'app.html'), app);
  console.log('\x1b[36m%s\x1b[0m', '\nInstallation completed. You can work on Vue documentation with `npm run dev`');
})();
