const path = require("path");

const getDevServer = () => ({
  contentBase: path.join(__dirname, "..", "public"),
  compress: true,
  port: 9000,
  hot: true,
  historyApiFallback: true
});

module.exports.getDevServer = getDevServer;
