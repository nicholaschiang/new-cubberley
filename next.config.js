const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
  env: {
    PRISMIC_API_ENDPOINT: process.env.PRISMIC_API_ENDPOINT,
    PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN,
  },
});
