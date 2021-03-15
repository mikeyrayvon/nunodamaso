const path = require("path");

module.exports = {
  i18n: {
    locales: ['de', 'fr', 'en'],
    defaultLocale: 'de',
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
};
