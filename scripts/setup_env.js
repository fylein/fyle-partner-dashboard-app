const { writeFile } = require("fs");

const environment = {
  production: false,
  fyle_client_id: `${process.env.FYLE_CLIENT_ID ? process.env.FYLE_CLIENT_ID : '{{FYLE_CLIENT_ID}}'}`,
  callback_uri: `${process.env.CALLBACK_URI ? process.env.CALLBACK_URI : '{{CALLBACK_URI}}'}`,
  api_url: `${process.env.API_URL ? process.env.API_URL : '{{API_URL}}'}`,
  fyle_app_url: `${process.env.FYLE_APP_URL ? process.env.FYLE_APP_URL : '{{FYLE_APP_URL}}'}`,
  app_url: `${process.env.APP_URL ? process.env.APP_URL : '{{APP_URL}}'}`,
  sentry_dsn: `${process.env.SENTRY_DSN ? process.env.SENTRY_DSN : '{{SENTRY_DSN}}'}`,
  sentry_env: `${process.env.SENTRY_ENV ? process.env.SENTRY_ENV : '{{SENTRY_ENV}}'}`,
  e2e_tests: {
    env: `${process.env.E2E_TESTS_ENV ? process.env.E2E_TESTS_ENV : '{{E2E_TESTS_ENV}}'}`,
    refresh_token: `${process.env.E2E_TESTS_REFRESH_TOKEN ? process.env.E2E_TESTS_REFRESH_TOKEN : '{{E2E_TESTS_REFRESH_TOKEN}}'}`,
    org_id: `${process.env.E2E_TESTS_ORG_ID ? process.env.E2E_TESTS_ORG_ID : '{{E2E_TESTS_ORG_ID}}'}`,
    }
};

const targetPath = './src/environments/environment.json';
writeFile(targetPath, JSON.stringify(environment), 'utf8', (err) => {
  if (err) {
    return console.error(err);
  }
});
