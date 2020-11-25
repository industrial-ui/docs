rm -rf static
cd ../layout
npm ci
npm run layout:build
rm -rf __sapper__/export/client
mv __sapper__/export ../vue/static
mv ../vue/static/index.html ../vue/app.html
