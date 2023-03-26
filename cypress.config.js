const { defineConfig } = require("cypress");

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://saf2.dev.mcom.gov.br/',
    setupNodeEvents(on, config) {

      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
