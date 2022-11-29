function cov_1uv97ologl() {
  var path = "/Users/anish/Workspace/fyle-partner-dashboard-app/src/main.ts";
  var hash = "5727a25cae4c967dd708e7505c5e02b57ec87efe";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/anish/Workspace/fyle-partner-dashboard-app/src/main.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 17
        },
        end: {
          line: 10,
          column: 41
        }
      },
      "1": {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 34
        }
      },
      "2": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "3": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "4": {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 31,
          column: 1
        }
      },
      "5": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 19
        }
      },
      "6": {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 34,
          column: 36
        }
      },
      "7": {
        start: {
          line: 34,
          column: 16
        },
        end: {
          line: 34,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 34,
            column: 9
          },
          end: {
            line: 34,
            column: 10
          }
        },
        loc: {
          start: {
            line: 34,
            column: 16
          },
          end: {
            line: 34,
            column: 34
          }
        },
        line: 34
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 0
          },
          end: {
            line: 27,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 0
          },
          end: {
            line: 27,
            column: 1
          }
        }, {
          start: {
            line: 13,
            column: 0
          },
          end: {
            line: 27,
            column: 1
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 26
          }
        }, {
          start: {
            line: 13,
            column: 30
          },
          end: {
            line: 13,
            column: 33
          }
        }, {
          start: {
            line: 13,
            column: 37
          },
          end: {
            line: 13,
            column: 61
          }
        }],
        line: 13
      },
      "2": {
        loc: {
          start: {
            line: 29,
            column: 0
          },
          end: {
            line: 31,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 0
          },
          end: {
            line: 31,
            column: 1
          }
        }, {
          start: {
            line: 29,
            column: 0
          },
          end: {
            line: 31,
            column: 1
          }
        }],
        line: 29
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5727a25cae4c967dd708e7505c5e02b57ec87efe"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1uv97ologl = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1uv97ologl();
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from '@sentry/angular';
import { Integrations as TracingIntegrations } from '@sentry/tracing';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
const hostname = (cov_1uv97ologl().s[0]++, window.location.hostname);
const env = (cov_1uv97ologl().s[1]++, environment.sentry_env);
cov_1uv97ologl().s[2]++;

if ((cov_1uv97ologl().b[1][0]++, environment.sentry_dsn) && (cov_1uv97ologl().b[1][1]++, env) && (cov_1uv97ologl().b[1][2]++, hostname !== 'localhost')) {
  cov_1uv97ologl().b[0][0]++;
  cov_1uv97ologl().s[3]++;
  Sentry.init({
    dsn: environment.sentry_dsn,
    release: env,
    environment: env,
    ignoreErrors: ['Non-Error exception captured'],
    integrations: [new TracingIntegrations.BrowserTracing({
      routingInstrumentation: Sentry.routingInstrumentation,
      tracingOrigins: ['*']
    })],
    tracesSampleRate: 1
  });
} else {
  cov_1uv97ologl().b[0][1]++;
}

cov_1uv97ologl().s[4]++;

if (environment.production) {
  cov_1uv97ologl().b[2][0]++;
  cov_1uv97ologl().s[5]++;
  enableProdMode();
} else {
  cov_1uv97ologl().b[2][1]++;
}

cov_1uv97ologl().s[6]++;
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => {
  cov_1uv97ologl().f[0]++;
  cov_1uv97ologl().s[7]++;
  return console.error(err);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJlbmFibGVQcm9kTW9kZSIsInBsYXRmb3JtQnJvd3NlckR5bmFtaWMiLCJTZW50cnkiLCJJbnRlZ3JhdGlvbnMiLCJUcmFjaW5nSW50ZWdyYXRpb25zIiwiQXBwTW9kdWxlIiwiZW52aXJvbm1lbnQiLCJob3N0bmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiZW52Iiwic2VudHJ5X2VudiIsInNlbnRyeV9kc24iLCJpbml0IiwiZHNuIiwicmVsZWFzZSIsImlnbm9yZUVycm9ycyIsImludGVncmF0aW9ucyIsIkJyb3dzZXJUcmFjaW5nIiwicm91dGluZ0luc3RydW1lbnRhdGlvbiIsInRyYWNpbmdPcmlnaW5zIiwidHJhY2VzU2FtcGxlUmF0ZSIsInByb2R1Y3Rpb24iLCJib290c3RyYXBNb2R1bGUiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VzIjpbIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSAnQHNlbnRyeS9hbmd1bGFyJztcbmltcG9ydCB7IEludGVncmF0aW9ucyBhcyBUcmFjaW5nSW50ZWdyYXRpb25zIH0gZnJvbSAnQHNlbnRyeS90cmFjaW5nJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuY29uc3QgaG9zdG5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG5jb25zdCBlbnYgPSBlbnZpcm9ubWVudC5zZW50cnlfZW52O1xuXG5pZiAoZW52aXJvbm1lbnQuc2VudHJ5X2RzbiAmJiBlbnYgJiYgaG9zdG5hbWUgIT09ICdsb2NhbGhvc3QnKSB7XG4gIFNlbnRyeS5pbml0KHtcbiAgICBkc246IGVudmlyb25tZW50LnNlbnRyeV9kc24sXG4gICAgcmVsZWFzZTogZW52LFxuICAgIGVudmlyb25tZW50OiBlbnYsXG4gICAgaWdub3JlRXJyb3JzOiBbXG4gICAgICAnTm9uLUVycm9yIGV4Y2VwdGlvbiBjYXB0dXJlZCdcbiAgICBdLFxuICAgIGludGVncmF0aW9uczogW25ldyBUcmFjaW5nSW50ZWdyYXRpb25zLkJyb3dzZXJUcmFjaW5nKHtcbiAgICAgIHJvdXRpbmdJbnN0cnVtZW50YXRpb246IFNlbnRyeS5yb3V0aW5nSW5zdHJ1bWVudGF0aW9uLFxuICAgICAgdHJhY2luZ09yaWdpbnM6IFsnKiddXG4gICAgfSldLFxuICAgIHRyYWNlc1NhbXBsZVJhdGU6IDFcbiAgfSk7XG59XG5cbmlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XG4gIGVuYWJsZVByb2RNb2RlKCk7XG59XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKVxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLGNBQVQsUUFBK0IsZUFBL0I7QUFDQSxTQUFTQyxzQkFBVCxRQUF1QyxtQ0FBdkM7QUFFQSxPQUFPLEtBQUtDLE1BQVosTUFBd0IsaUJBQXhCO0FBQ0EsU0FBU0MsWUFBWSxJQUFJQyxtQkFBekIsUUFBb0QsaUJBQXBEO0FBRUEsU0FBU0MsU0FBVCxRQUEwQixrQkFBMUI7QUFDQSxTQUFTQyxXQUFULFFBQTRCLDRCQUE1QjtBQUVBLE1BQU1DLFFBQVEsNkJBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkYsUUFBbkIsQ0FBZDtBQUNBLE1BQU1HLEdBQUcsNkJBQUdKLFdBQVcsQ0FBQ0ssVUFBZixDQUFUOzs7QUFFQSxJQUFJLDZCQUFBTCxXQUFXLENBQUNNLFVBQVosa0NBQTBCRixHQUExQixrQ0FBaUNILFFBQVEsS0FBSyxXQUE5QyxDQUFKLEVBQStEO0VBQUE7RUFBQTtFQUM3REwsTUFBTSxDQUFDVyxJQUFQLENBQVk7SUFDVkMsR0FBRyxFQUFFUixXQUFXLENBQUNNLFVBRFA7SUFFVkcsT0FBTyxFQUFFTCxHQUZDO0lBR1ZKLFdBQVcsRUFBRUksR0FISDtJQUlWTSxZQUFZLEVBQUUsQ0FDWiw4QkFEWSxDQUpKO0lBT1ZDLFlBQVksRUFBRSxDQUFDLElBQUliLG1CQUFtQixDQUFDYyxjQUF4QixDQUF1QztNQUNwREMsc0JBQXNCLEVBQUVqQixNQUFNLENBQUNpQixzQkFEcUI7TUFFcERDLGNBQWMsRUFBRSxDQUFDLEdBQUQ7SUFGb0MsQ0FBdkMsQ0FBRCxDQVBKO0lBV1ZDLGdCQUFnQixFQUFFO0VBWFIsQ0FBWjtBQWFELENBZEQ7RUFBQTtBQUFBOzs7O0FBZ0JBLElBQUlmLFdBQVcsQ0FBQ2dCLFVBQWhCLEVBQTRCO0VBQUE7RUFBQTtFQUMxQnRCLGNBQWM7QUFDZixDQUZEO0VBQUE7QUFBQTs7O0FBSUFDLHNCQUFzQixHQUFHc0IsZUFBekIsQ0FBeUNsQixTQUF6QyxFQUNHbUIsS0FESCxDQUNTQyxHQUFHLElBQUk7RUFBQTtFQUFBO0VBQUEsT0FBQUMsT0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFBa0IsQ0FEbEMifQ==