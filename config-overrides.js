const {rewireEmotion} = require('react-app-rewire-emotion');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

/* config-overrides.js */
module.exports = function override(config, env) {
  let modifiedConfig = config;

  modifiedConfig = rewireEmotion(modifiedConfig, env);

  if (env === 'development') {
    modifiedConfig = rewireReactHotLoader(modifiedConfig, env);
  }

  return modifiedConfig;
};
