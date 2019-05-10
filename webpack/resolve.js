const path = require("path");

const getResolve = () => ({
  extensions: [".js"],
  modules: [
    path.resolve(__dirname, "..", "src"),
    path.resolve(__dirname, "..", "node_modules")
  ]
});

module.exports.getResolve = getResolve;
