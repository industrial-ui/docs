# Remove all previously generated layout files
rm -rf static
rm app.html

# Go to layout, install dependencies and perform the build
cd ../layout
npm ci
npm run layout:build

# Move the build to the vue folder
mv __sapper__/export ../vue/static
mv ../vue/static/index.html ../vue/app.html

# Populate the Nuxt's app.html: it is required to have {{HEAD}} and {{APP}}
node ../vue/build/app-population.js
