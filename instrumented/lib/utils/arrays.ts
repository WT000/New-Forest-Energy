function cov_1wfcvz1kd9() {
  var path = "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\lib\\utils\\arrays.ts";
  var hash = "57245d2acc6cb7c335a091ac42a6e5bc9e847838";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\lib\\utils\\arrays.ts",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 16
        },
        end: {
          line: 2,
          column: 25
        }
      },
      "1": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 11,
          column: 7
        }
      },
      "2": {
        start: {
          line: 4,
          column: 21
        },
        end: {
          line: 4,
          column: 36
        }
      },
      "3": {
        start: {
          line: 5,
          column: 28
        },
        end: {
          line: 5,
          column: 40
        }
      },
      "4": {
        start: {
          line: 6,
          column: 9
        },
        end: {
          line: 10,
          column: 10
        }
      },
      "5": {
        start: {
          line: 7,
          column: 13
        },
        end: {
          line: 7,
          column: 34
        }
      },
      "6": {
        start: {
          line: 9,
          column: 13
        },
        end: {
          line: 9,
          column: 35
        }
      },
      "7": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "groupBy",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 23
          }
        },
        loc: {
          start: {
            line: 1,
            column: 41
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 3,
            column: 17
          },
          end: {
            line: 3,
            column: 18
          }
        },
        loc: {
          start: {
            line: 3,
            column: 27
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 9
          },
          end: {
            line: 10,
            column: 10
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 9
          },
          end: {
            line: 10,
            column: 10
          }
        }, {
          start: {
            line: 6,
            column: 9
          },
          end: {
            line: 10,
            column: 10
          }
        }],
        line: 6
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
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "57245d2acc6cb7c335a091ac42a6e5bc9e847838"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1wfcvz1kd9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1wfcvz1kd9();
export function groupBy(list, keyGetter) {
  cov_1wfcvz1kd9().f[0]++;
  const map = (cov_1wfcvz1kd9().s[0]++, new Map());
  cov_1wfcvz1kd9().s[1]++;
  list.forEach(item => {
    cov_1wfcvz1kd9().f[1]++;
    const key = (cov_1wfcvz1kd9().s[2]++, keyGetter(item));
    const collection = (cov_1wfcvz1kd9().s[3]++, map.get(key));
    cov_1wfcvz1kd9().s[4]++;
    if (!collection) {
      cov_1wfcvz1kd9().b[0][0]++;
      cov_1wfcvz1kd9().s[5]++;
      map.set(key, [item]);
    } else {
      cov_1wfcvz1kd9().b[0][1]++;
      cov_1wfcvz1kd9().s[6]++;
      collection.push(item);
    }
  });
  cov_1wfcvz1kd9().s[7]++;
  return map;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncm91cEJ5IiwibGlzdCIsImtleUdldHRlciIsIm1hcCIsIk1hcCIsImZvckVhY2giLCJpdGVtIiwia2V5IiwiY29sbGVjdGlvbiIsImdldCIsInNldCIsInB1c2giXSwic291cmNlcyI6WyJhcnJheXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdyb3VwQnkobGlzdCwga2V5R2V0dGVyKSB7XHJcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XHJcbiAgICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgY29uc3Qga2V5ID0ga2V5R2V0dGVyKGl0ZW0pO1xyXG4gICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gbWFwLmdldChrZXkpO1xyXG4gICAgICAgICBpZiAoIWNvbGxlY3Rpb24pIHtcclxuICAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBbaXRlbV0pO1xyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgY29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtYXA7XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLE9BQU8sU0FBU0EsT0FBTyxDQUFDQyxJQUFJLEVBQUVDLFNBQVMsRUFBRTtFQUFBO0VBQ3JDLE1BQU1DLEdBQUcsNkJBQUcsSUFBSUMsR0FBRyxFQUFFO0VBQUM7RUFDdEJILElBQUksQ0FBQ0ksT0FBTyxDQUFFQyxJQUFJLElBQUs7SUFBQTtJQUNsQixNQUFNQyxHQUFHLDZCQUFHTCxTQUFTLENBQUNJLElBQUksQ0FBQztJQUMzQixNQUFNRSxVQUFVLDZCQUFHTCxHQUFHLENBQUNNLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0lBQUM7SUFDaEMsSUFBSSxDQUFDQyxVQUFVLEVBQUU7TUFBQTtNQUFBO01BQ2JMLEdBQUcsQ0FBQ08sR0FBRyxDQUFDSCxHQUFHLEVBQUUsQ0FBQ0QsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxNQUFNO01BQUE7TUFBQTtNQUNIRSxVQUFVLENBQUNHLElBQUksQ0FBQ0wsSUFBSSxDQUFDO0lBQ3pCO0VBQ0wsQ0FBQyxDQUFDO0VBQUM7RUFDSCxPQUFPSCxHQUFHO0FBQ2QifQ==