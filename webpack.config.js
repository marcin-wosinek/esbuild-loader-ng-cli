const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = (config, options) => {
  // if you console log here, you can see what's inside the config

  // remove 2 first minimizers, hopeing they are the TerserPlugin
  config.optimization.minimizer.shift();
  config.optimization.minimizer.shift();

  config.optimization.minimizer.unshift(
    new ESBuildMinifyPlugin({
      target: "es2015", // Syntax to compile to (see options below for possible values)
    })
  );

  return config;
};
