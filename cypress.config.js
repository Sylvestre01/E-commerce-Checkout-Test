const { defineConfig } = require("cypress");
const logger = require("./cypress/plugins/logger");

module.exports = defineConfig({
  e2e: {
    //A String or Array of glob patterns of the test files to load.
    specPattern	: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    //Path to file to load before spec files load. This file is compiled and bundled.
    supportFile : 'cypress/support/e2e.{js,jsx,ts,tsx}',
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
    pageLoadTimeout: 100000,
    //reports configuration
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    //Screenshots
    screenshotsFolder       : 'cypress/screenshots',
    screenshotOnRunFailure  : true,  //Whether Cypress will take a screenshot when a test fails during cypress run.

    //Videos
    video             : true,            //Whether Cypress will capture a video of the tests run with cypress run.
    videosFolder      : 'cypress/videos',
    videoCompression  : false,            //The quality setting for the video compression, in Constant Rate Factor (CRF).

    //Viewport  (Override with cy.viewport() command)
    viewportHeight  : 800,   //Default height in pixels for the application under tests' viewport.
    viewportWidth   : 1200,  //Default width in pixels for the application under tests' viewport.

    //Timeouts
    defaultCommandTimeout : 5000, //Time, in milliseconds, to wait until most DOM based commands are considered timed out.

  }});
