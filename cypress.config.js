const { allureCypress } = require('allure-cypress/reporter');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 1,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 1,
    },
    video:true,
    videoCompression:32,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      // implement node event listeners here
      
    },
  },
});
