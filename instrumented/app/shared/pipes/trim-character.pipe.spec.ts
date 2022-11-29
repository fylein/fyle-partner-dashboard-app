function cov_1v9qepm24s() {
  var path = "/Users/anish/Workspace/fyle-partner-dashboard-app/src/app/shared/pipes/trim-character.pipe.spec.ts";
  var hash = "350620eb1dc86f87fb2c211fc4aac692fe33e651";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/anish/Workspace/fyle-partner-dashboard-app/src/app/shared/pipes/trim-character.pipe.spec.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 7,
          column: 5
        }
      },
      "2": {
        start: {
          line: 5,
          column: 17
        },
        end: {
          line: 5,
          column: 40
        }
      },
      "3": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 30
        }
      },
      "4": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 13,
          column: 5
        }
      },
      "5": {
        start: {
          line: 10,
          column: 17
        },
        end: {
          line: 10,
          column: 60
        }
      },
      "6": {
        start: {
          line: 11,
          column: 17
        },
        end: {
          line: 11,
          column: 40
        }
      },
      "7": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 55
        }
      },
      "8": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "9": {
        start: {
          line: 16,
          column: 17
        },
        end: {
          line: 16,
          column: 25
        }
      },
      "10": {
        start: {
          line: 17,
          column: 17
        },
        end: {
          line: 17,
          column: 40
        }
      },
      "11": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 30
          },
          end: {
            line: 3,
            column: 31
          }
        },
        loc: {
          start: {
            line: 3,
            column: 36
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
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
            line: 7,
            column: 3
          }
        },
        line: 4
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 9,
            column: 35
          },
          end: {
            line: 9,
            column: 36
          }
        },
        loc: {
          start: {
            line: 9,
            column: 41
          },
          end: {
            line: 13,
            column: 3
          }
        },
        line: 9
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 15,
            column: 36
          },
          end: {
            line: 15,
            column: 37
          }
        },
        loc: {
          start: {
            line: 15,
            column: 42
          },
          end: {
            line: 19,
            column: 3
          }
        },
        line: 15
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
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "350620eb1dc86f87fb2c211fc4aac692fe33e651"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1v9qepm24s = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1v9qepm24s();
import { TrimCharacterPipe } from './trim-character.pipe';
cov_1v9qepm24s().s[0]++;
describe('TrimCharacterPipe', () => {
  cov_1v9qepm24s().f[0]++;
  cov_1v9qepm24s().s[1]++;
  it('create an instance', () => {
    cov_1v9qepm24s().f[1]++;
    const pipe = (cov_1v9qepm24s().s[2]++, new TrimCharacterPipe());
    cov_1v9qepm24s().s[3]++;
    expect(pipe).toBeTruthy();
  });
  cov_1v9qepm24s().s[4]++;
  it('should trim characters > 4', () => {
    cov_1v9qepm24s().f[2]++;
    const name = (cov_1v9qepm24s().s[5]++, 'Fyle for Automated Testing Webapp Testing');
    const pipe = (cov_1v9qepm24s().s[6]++, new TrimCharacterPipe());
    cov_1v9qepm24s().s[7]++;
    expect(pipe.transform(name, 4)).toEqual('Fyle...');
  });
  cov_1v9qepm24s().s[8]++;
  it('should trim characters > 10', () => {
    cov_1v9qepm24s().f[3]++;
    const name = (cov_1v9qepm24s().s[9]++, 'Ashwin');
    const pipe = (cov_1v9qepm24s().s[10]++, new TrimCharacterPipe());
    cov_1v9qepm24s().s[11]++;
    expect(pipe.transform(name, 40)).toEqual(name);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmltQ2hhcmFjdGVyUGlwZSIsImRlc2NyaWJlIiwiaXQiLCJwaXBlIiwiZXhwZWN0IiwidG9CZVRydXRoeSIsIm5hbWUiLCJ0cmFuc2Zvcm0iLCJ0b0VxdWFsIl0sInNvdXJjZXMiOlsidHJpbS1jaGFyYWN0ZXIucGlwZS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyaW1DaGFyYWN0ZXJQaXBlIH0gZnJvbSAnLi90cmltLWNoYXJhY3Rlci5waXBlJztcblxuZGVzY3JpYmUoJ1RyaW1DaGFyYWN0ZXJQaXBlJywgKCkgPT4ge1xuICBpdCgnY3JlYXRlIGFuIGluc3RhbmNlJywgKCkgPT4ge1xuICAgIGNvbnN0IHBpcGUgPSBuZXcgVHJpbUNoYXJhY3RlclBpcGUoKTtcbiAgICBleHBlY3QocGlwZSkudG9CZVRydXRoeSgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHRyaW0gY2hhcmFjdGVycyA+IDQnLCAoKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9ICdGeWxlIGZvciBBdXRvbWF0ZWQgVGVzdGluZyBXZWJhcHAgVGVzdGluZyc7XG4gICAgY29uc3QgcGlwZSA9IG5ldyBUcmltQ2hhcmFjdGVyUGlwZSgpO1xuICAgIGV4cGVjdChwaXBlLnRyYW5zZm9ybShuYW1lLCA0KSkudG9FcXVhbCgnRnlsZS4uLicpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHRyaW0gY2hhcmFjdGVycyA+IDEwJywgKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSAnQXNod2luJztcbiAgICBjb25zdCBwaXBlID0gbmV3IFRyaW1DaGFyYWN0ZXJQaXBlKCk7XG4gICAgZXhwZWN0KHBpcGUudHJhbnNmb3JtKG5hbWUsIDQwKSkudG9FcXVhbChuYW1lKTtcbiAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsaUJBQVQsUUFBa0MsdUJBQWxDOztBQUVBQyxRQUFRLENBQUMsbUJBQUQsRUFBc0IsTUFBTTtFQUFBO0VBQUE7RUFDbENDLEVBQUUsQ0FBQyxvQkFBRCxFQUF1QixNQUFNO0lBQUE7SUFDN0IsTUFBTUMsSUFBSSw2QkFBRyxJQUFJSCxpQkFBSixFQUFILENBQVY7SUFENkI7SUFFN0JJLE1BQU0sQ0FBQ0QsSUFBRCxDQUFOLENBQWFFLFVBQWI7RUFDRCxDQUhDLENBQUY7RUFEa0M7RUFNbENILEVBQUUsQ0FBQyw0QkFBRCxFQUErQixNQUFNO0lBQUE7SUFDckMsTUFBTUksSUFBSSw2QkFBRywyQ0FBSCxDQUFWO0lBQ0EsTUFBTUgsSUFBSSw2QkFBRyxJQUFJSCxpQkFBSixFQUFILENBQVY7SUFGcUM7SUFHckNJLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDSSxTQUFMLENBQWVELElBQWYsRUFBcUIsQ0FBckIsQ0FBRCxDQUFOLENBQWdDRSxPQUFoQyxDQUF3QyxTQUF4QztFQUNELENBSkMsQ0FBRjtFQU5rQztFQVlsQ04sRUFBRSxDQUFDLDZCQUFELEVBQWdDLE1BQU07SUFBQTtJQUN0QyxNQUFNSSxJQUFJLDZCQUFHLFFBQUgsQ0FBVjtJQUNBLE1BQU1ILElBQUksOEJBQUcsSUFBSUgsaUJBQUosRUFBSCxDQUFWO0lBRnNDO0lBR3RDSSxNQUFNLENBQUNELElBQUksQ0FBQ0ksU0FBTCxDQUFlRCxJQUFmLEVBQXFCLEVBQXJCLENBQUQsQ0FBTixDQUFpQ0UsT0FBakMsQ0FBeUNGLElBQXpDO0VBQ0QsQ0FKQyxDQUFGO0FBS0QsQ0FqQk8sQ0FBUiJ9