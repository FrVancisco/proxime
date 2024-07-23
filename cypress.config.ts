import { defineConfig } from "cypress";
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.TEST_USER = process.env.TEST_USER || config.env.TEST_USER;
      config.env.TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD || config.env.TEST_USER_PASSWORD;
      return config;
    },
    "watchForFileChanges": false
  },
});
