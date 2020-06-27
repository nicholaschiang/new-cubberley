const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'node_modules')],
  },
});
