const { defineConfig } = require("cypress");
const logger = require("./cypress/plugins/logger");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        logMessage(message) {
          logger.info(message);
          return null;
        },
        logError(message) {
          logger.error(message);
          return null;
        }
      });

      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      json: true,
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true
  },
}});
