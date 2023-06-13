const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 40000,
  viewportWidthBreakpoint: 768,

  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
    experimentalSessionSupport: true,
    chromeWebSecurity: false,
    experimentalStudio: true    
  },
});
