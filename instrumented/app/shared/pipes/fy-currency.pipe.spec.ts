function cov_iwknbnz92() {
  var path = "/Users/anish/Workspace/fyle-partner-dashboard-app/src/app/shared/pipes/fy-currency.pipe.spec.ts";
  var hash = "92d2a32a6dd6e33ba784c10465bf464168553857";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/anish/Workspace/fyle-partner-dashboard-app/src/app/shared/pipes/fy-currency.pipe.spec.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "1": {
        start: {
          line: 5,
          column: 23
        },
        end: {
          line: 5,
          column: 45
        }
      },
      "2": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 6,
          column: 47
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 5
        }
      },
      "4": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 30
        }
      },
      "5": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "6": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 59
        }
      },
      "7": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "8": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 63
        }
      },
      "9": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "10": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 61
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 27
          },
          end: {
            line: 4,
            column: 28
          }
        },
        loc: {
          start: {
            line: 4,
            column: 33
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 27
          },
          end: {
            line: 8,
            column: 28
          }
        },
        loc: {
          start: {
            line: 8,
            column: 33
          },
          end: {
            line: 10,
            column: 3
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 12,
            column: 41
          },
          end: {
            line: 12,
            column: 42
          }
        },
        loc: {
          start: {
            line: 12,
            column: 47
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 12
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 16,
            column: 41
          },
          end: {
            line: 16,
            column: 42
          }
        },
        loc: {
          start: {
            line: 16,
            column: 47
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 16
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 20,
            column: 50
          },
          end: {
            line: 20,
            column: 51
          }
        },
        loc: {
          start: {
            line: 20,
            column: 56
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 20
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "92d2a32a6dd6e33ba784c10465bf464168553857"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_iwknbnz92 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_iwknbnz92();
import { CurrencyPipe } from '@angular/common';
import { FyCurrencyPipe } from './fy-currency.pipe';
cov_iwknbnz92().s[0]++;
describe('FyCurrencyPipe', () => {
  cov_iwknbnz92().f[0]++;
  const currencyPipe = (cov_iwknbnz92().s[1]++, new CurrencyPipe('en'));
  const pipe = (cov_iwknbnz92().s[2]++, new FyCurrencyPipe(currencyPipe));
  cov_iwknbnz92().s[3]++;
  it('create an instance', () => {
    cov_iwknbnz92().f[1]++;
    cov_iwknbnz92().s[4]++;
    expect(pipe).toBeTruthy();
  });
  cov_iwknbnz92().s[5]++;
  it('should return a valid USD amount', () => {
    cov_iwknbnz92().f[2]++;
    cov_iwknbnz92().s[6]++;
    expect(pipe.transform(243.314, 'USD')).toBe('$243.31');
  });
  cov_iwknbnz92().s[7]++;
  it('should return a valid OMR amount', () => {
    cov_iwknbnz92().f[3]++;
    cov_iwknbnz92().s[8]++;
    expect(pipe.transform(243.314, 'OMR')).toBe('OMR 243.314');
  });
  cov_iwknbnz92().s[9]++;
  it('should return a valid negative USD amount', () => {
    cov_iwknbnz92().f[4]++;
    cov_iwknbnz92().s[10]++;
    expect(pipe.transform(-243.314, 'USD')).toBe('-$243.31');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDdXJyZW5jeVBpcGUiLCJGeUN1cnJlbmN5UGlwZSIsImRlc2NyaWJlIiwiY3VycmVuY3lQaXBlIiwicGlwZSIsIml0IiwiZXhwZWN0IiwidG9CZVRydXRoeSIsInRyYW5zZm9ybSIsInRvQmUiXSwic291cmNlcyI6WyJmeS1jdXJyZW5jeS5waXBlLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZ5Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi9meS1jdXJyZW5jeS5waXBlJztcblxuZGVzY3JpYmUoJ0Z5Q3VycmVuY3lQaXBlJywgKCkgPT4ge1xuICBjb25zdCBjdXJyZW5jeVBpcGUgPSBuZXcgQ3VycmVuY3lQaXBlKCdlbicpO1xuICBjb25zdCBwaXBlID0gbmV3IEZ5Q3VycmVuY3lQaXBlKGN1cnJlbmN5UGlwZSk7XG5cbiAgaXQoJ2NyZWF0ZSBhbiBpbnN0YW5jZScsICgpID0+IHtcbiAgICBleHBlY3QocGlwZSkudG9CZVRydXRoeSgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHJldHVybiBhIHZhbGlkIFVTRCBhbW91bnQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHBpcGUudHJhbnNmb3JtKDI0My4zMTQsICdVU0QnKSkudG9CZSgnJDI0My4zMScpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHJldHVybiBhIHZhbGlkIE9NUiBhbW91bnQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHBpcGUudHJhbnNmb3JtKDI0My4zMTQsICdPTVInKSkudG9CZSgnT01SIDI0My4zMTQnKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCByZXR1cm4gYSB2YWxpZCBuZWdhdGl2ZSBVU0QgYW1vdW50JywgKCkgPT4ge1xuICAgIGV4cGVjdChwaXBlLnRyYW5zZm9ybSgtMjQzLjMxNCwgJ1VTRCcpKS50b0JlKCctJDI0My4zMScpO1xuICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLFlBQVQsUUFBNkIsaUJBQTdCO0FBQ0EsU0FBU0MsY0FBVCxRQUErQixvQkFBL0I7O0FBRUFDLFFBQVEsQ0FBQyxnQkFBRCxFQUFtQixNQUFNO0VBQUE7RUFDL0IsTUFBTUMsWUFBWSw0QkFBRyxJQUFJSCxZQUFKLENBQWlCLElBQWpCLENBQUgsQ0FBbEI7RUFDQSxNQUFNSSxJQUFJLDRCQUFHLElBQUlILGNBQUosQ0FBbUJFLFlBQW5CLENBQUgsQ0FBVjtFQUYrQjtFQUkvQkUsRUFBRSxDQUFDLG9CQUFELEVBQXVCLE1BQU07SUFBQTtJQUFBO0lBQzdCQyxNQUFNLENBQUNGLElBQUQsQ0FBTixDQUFhRyxVQUFiO0VBQ0QsQ0FGQyxDQUFGO0VBSitCO0VBUS9CRixFQUFFLENBQUMsa0NBQUQsRUFBcUMsTUFBTTtJQUFBO0lBQUE7SUFDM0NDLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDSSxTQUFMLENBQWUsT0FBZixFQUF3QixLQUF4QixDQUFELENBQU4sQ0FBdUNDLElBQXZDLENBQTRDLFNBQTVDO0VBQ0QsQ0FGQyxDQUFGO0VBUitCO0VBWS9CSixFQUFFLENBQUMsa0NBQUQsRUFBcUMsTUFBTTtJQUFBO0lBQUE7SUFDM0NDLE1BQU0sQ0FBQ0YsSUFBSSxDQUFDSSxTQUFMLENBQWUsT0FBZixFQUF3QixLQUF4QixDQUFELENBQU4sQ0FBdUNDLElBQXZDLENBQTRDLGFBQTVDO0VBQ0QsQ0FGQyxDQUFGO0VBWitCO0VBZ0IvQkosRUFBRSxDQUFDLDJDQUFELEVBQThDLE1BQU07SUFBQTtJQUFBO0lBQ3BEQyxNQUFNLENBQUNGLElBQUksQ0FBQ0ksU0FBTCxDQUFlLENBQUMsT0FBaEIsRUFBeUIsS0FBekIsQ0FBRCxDQUFOLENBQXdDQyxJQUF4QyxDQUE2QyxVQUE3QztFQUNELENBRkMsQ0FBRjtBQUdELENBbkJPLENBQVIifQ==