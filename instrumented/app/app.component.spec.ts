function cov_241zllhn0u() {
  var path = "/Users/anish/Workspace/fyle-partner-dashboard-app/src/app/app.component.spec.ts";
  var hash = "23c6093fa5bffb00407741f3fcdf37c481874be4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/anish/Workspace/fyle-partner-dashboard-app/src/app/app.component.spec.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 15,
          column: 5
        }
      },
      "2": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 14,
          column: 27
        }
      },
      "3": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "4": {
        start: {
          line: 18,
          column: 20
        },
        end: {
          line: 18,
          column: 57
        }
      },
      "5": {
        start: {
          line: 19,
          column: 16
        },
        end: {
          line: 19,
          column: 41
        }
      },
      "6": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 29
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 25
          },
          end: {
            line: 5,
            column: 26
          }
        },
        loc: {
          start: {
            line: 5,
            column: 31
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 13
          },
          end: {
            line: 6,
            column: 14
          }
        },
        loc: {
          start: {
            line: 6,
            column: 25
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 6
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 17,
            column: 30
          },
          end: {
            line: 17,
            column: 31
          }
        },
        loc: {
          start: {
            line: 17,
            column: 36
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 17
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
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "23c6093fa5bffb00407741f3fcdf37c481874be4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_241zllhn0u = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_241zllhn0u();
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
cov_241zllhn0u().s[0]++;
describe('AppComponent', () => {
  cov_241zllhn0u().f[0]++;
  cov_241zllhn0u().s[1]++;
  beforeEach(async () => {
    cov_241zllhn0u().f[1]++;
    cov_241zllhn0u().s[2]++;
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  });
  cov_241zllhn0u().s[3]++;
  it('should create the app', () => {
    cov_241zllhn0u().f[2]++;
    const fixture = (cov_241zllhn0u().s[4]++, TestBed.createComponent(AppComponent));
    const app = (cov_241zllhn0u().s[5]++, fixture.componentInstance);
    cov_241zllhn0u().s[6]++;
    expect(app).toBeTruthy();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUZXN0QmVkIiwiUm91dGVyVGVzdGluZ01vZHVsZSIsIkFwcENvbXBvbmVudCIsImRlc2NyaWJlIiwiYmVmb3JlRWFjaCIsImNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUiLCJpbXBvcnRzIiwiZGVjbGFyYXRpb25zIiwiY29tcGlsZUNvbXBvbmVudHMiLCJpdCIsImZpeHR1cmUiLCJjcmVhdGVDb21wb25lbnQiLCJhcHAiLCJjb21wb25lbnRJbnN0YW5jZSIsImV4cGVjdCIsInRvQmVUcnV0aHkiXSwic291cmNlcyI6WyJhcHAuY29tcG9uZW50LnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBSb3V0ZXJUZXN0aW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuZGVzY3JpYmUoJ0FwcENvbXBvbmVudCcsICgpID0+IHtcbiAgYmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyVGVzdGluZ01vZHVsZVxuICAgICAgXSxcbiAgICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICAgIF1cbiAgICB9KS5jb21waWxlQ29tcG9uZW50cygpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGNyZWF0ZSB0aGUgYXBwJywgKCkgPT4ge1xuICAgIGNvbnN0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChBcHBDb21wb25lbnQpO1xuICAgIGNvbnN0IGFwcCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgZXhwZWN0KGFwcCkudG9CZVRydXRoeSgpO1xuICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsT0FBVCxRQUF3Qix1QkFBeEI7QUFDQSxTQUFTQyxtQkFBVCxRQUFvQyx5QkFBcEM7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGlCQUE3Qjs7QUFFQUMsUUFBUSxDQUFDLGNBQUQsRUFBaUIsTUFBTTtFQUFBO0VBQUE7RUFDN0JDLFVBQVUsQ0FBQyxZQUFZO0lBQUE7SUFBQTtJQUNyQixNQUFNSixPQUFPLENBQUNLLHNCQUFSLENBQStCO01BQ25DQyxPQUFPLEVBQUUsQ0FDUEwsbUJBRE8sQ0FEMEI7TUFJbkNNLFlBQVksRUFBRSxDQUNaTCxZQURZO0lBSnFCLENBQS9CLEVBT0hNLGlCQVBHLEVBQU47RUFRRCxDQVRTLENBQVY7RUFENkI7RUFZN0JDLEVBQUUsQ0FBQyx1QkFBRCxFQUEwQixNQUFNO0lBQUE7SUFDaEMsTUFBTUMsT0FBTyw2QkFBR1YsT0FBTyxDQUFDVyxlQUFSLENBQXdCVCxZQUF4QixDQUFILENBQWI7SUFDQSxNQUFNVSxHQUFHLDZCQUFHRixPQUFPLENBQUNHLGlCQUFYLENBQVQ7SUFGZ0M7SUFHaENDLE1BQU0sQ0FBQ0YsR0FBRCxDQUFOLENBQVlHLFVBQVo7RUFDRCxDQUpDLENBQUY7QUFLRCxDQWpCTyxDQUFSIn0=