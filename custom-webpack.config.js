const webpack = require("webpack");
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      FEATURE_FLAG: `'PROD'`,
    }),
  ],
};
