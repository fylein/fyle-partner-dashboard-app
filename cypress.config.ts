import { defineConfig } from "cypress";
import environment from 'src/environments/environment.json';

export default defineConfig({
  e2e: {
    projectId: 'ixtuem',
    baseUrl: environment.app_url,
    setupNodeEvents(on, config) {
      //
    },
  },
});
