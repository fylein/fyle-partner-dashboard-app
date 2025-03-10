import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import * as Sentry from '@sentry/angular';

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
    integrations: [
      // Registers and configures the Tracing integration,
      // Which automatically instruments your application to monitor its
      // Performance, including custom Angular routing instrumentation
      Sentry.browserTracingIntegration(),
      // Registers the Replay integration,
      // Which automatically captures Session Replays
      Sentry.replayIntegration()
    ],
    tracesSampleRate: 1
  });
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
