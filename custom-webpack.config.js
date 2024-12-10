const webpack = require("webpack");
module.exports = {
  plugin: [
    new webpack.DefinePlugin({
      FEATURE_FLAG: `'PROD'`,
    }),
  ],
};
