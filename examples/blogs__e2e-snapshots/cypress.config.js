const { defineConfig } = require('cypress')

module.exports = defineConfig({
  baseUrl: 'http://localhost:3700',
  video: false,
  e2e: {
    setupNodeEvents (on, config) {
      // `on` is used to hook into various events Cypress emits
      // `config` is the resolved Cypress config
      on('task', {
        failed: require('cypress-failed-log/src/failed')(),
      })
    },
  },
})
