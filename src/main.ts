import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import * as Sentry from '@sentry/angular';
import { Integrations as TracingIntegrations } from '@sentry/tracing';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const hostname = window.location.hostname;
const env = environment.sentry_env;

if (environment.sentry_dsn && env && hostname !== 'localhost') {
  Sentry.init({
    dsn: environment.sentry_dsn,
    release: env,
    environment: env,
    ignoreErrors: [
      'Non-Error exception captured'
    ],
    integrations: [new TracingIntegrations.BrowserTracing({
      routingInstrumentation: Sentry.routingInstrumentation,
      tracingOrigins: ['*']
    })],
    tracesSampleRate: 1
  });
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
