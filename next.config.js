const path = require("path");

module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
};
