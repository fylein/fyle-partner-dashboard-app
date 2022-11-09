import { defineConfig } from "cypress";
import environment from 'src/environments/environment.json';

export default defineConfig({
  e2e: {
    projectId: '1umbvb',
    baseUrl: environment.app_url,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
  },
  defaultCommandTimeout: environment.e2e_tests.env !== 'staging' ? 15000 : 30000,
  requestTimeout: environment.e2e_tests.env !== 'staging' ? 15000 : 30000
}); 
