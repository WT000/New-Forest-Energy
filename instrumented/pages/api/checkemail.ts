function cov_12eevkyv2s() {
  var path = "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\checkemail.ts";
  var hash = "912d2df3e38555f6a3c9aa717b14b6d1dec7be94";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\checkemail.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "1": {
        start: {
          line: 6,
          column: 22
        },
        end: {
          line: 6,
          column: 37
        }
      },
      "2": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 7,
          column: 66
        }
      },
      "3": {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 7,
          column: 66
        }
      },
      "4": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 26
        }
      },
      "5": {
        start: {
          line: 12,
          column: 21
        },
        end: {
          line: 12,
          column: 55
        }
      },
      "6": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 51
        }
      },
      "7": {
        start: {
          line: 13,
          column: 18
        },
        end: {
          line: 13,
          column: 51
        }
      },
      "8": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 54
        }
      },
      "9": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "handler",
        decl: {
          start: {
            line: 4,
            column: 30
          },
          end: {
            line: 4,
            column: 37
          }
        },
        loc: {
          start: {
            line: 4,
            column: 48
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 8
          },
          end: {
            line: 7,
            column: 66
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 8
          },
          end: {
            line: 7,
            column: 66
          }
        }, {
          start: {
            line: 7,
            column: 8
          },
          end: {
            line: 7,
            column: 66
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 13,
            column: 51
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 13,
            column: 51
          }
        }, {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 13,
            column: 51
          }
        }],
        line: 13
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
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "912d2df3e38555f6a3c9aa717b14b6d1dec7be94"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_12eevkyv2s = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_12eevkyv2s();
import dbConnect from "../../db/dbcon/dbcon";
import User from "../../db/models/User";
export default async function handler(req, res) {
  cov_12eevkyv2s().f[0]++;
  cov_12eevkyv2s().s[0]++;
  try {
    const email = (cov_12eevkyv2s().s[1]++, req.query.email);
    cov_12eevkyv2s().s[2]++;
    if (!email) {
      cov_12eevkyv2s().b[0][0]++;
      cov_12eevkyv2s().s[3]++;
      return res.status(400).json({
        success: false
      });
    } else {
      cov_12eevkyv2s().b[0][1]++;
    }
    cov_12eevkyv2s().s[4]++;
    await dbConnect();

    // Find email in db
    const user = (cov_12eevkyv2s().s[5]++, await User.findOne({
      email: email
    }));
    cov_12eevkyv2s().s[6]++;
    if (user) {
      cov_12eevkyv2s().b[1][0]++;
      cov_12eevkyv2s().s[7]++;
      return res.json({
        success: true
      });
    } else {
      cov_12eevkyv2s().b[1][1]++;
    }
    cov_12eevkyv2s().s[8]++;
    return res.status(404).json({
      success: false
    });
  } catch (e) {
    cov_12eevkyv2s().s[9]++;
    res.status(500).json({
      error: e.message
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJVc2VyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVtYWlsIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsInVzZXIiLCJmaW5kT25lIiwiZSIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VzIjpbImNoZWNrZW1haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vZGIvZGJjb24vZGJjb25cIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL2RiL21vZGVscy9Vc2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gcmVxLnF1ZXJ5LmVtYWlsO1xyXG4gICAgICAgIGlmICghZW1haWwpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczogZmFsc2V9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XHJcblxyXG4gICAgICAgIC8vIEZpbmQgZW1haWwgaW4gZGJcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtlbWFpbDogZW1haWx9KVxyXG4gICAgICAgIGlmICh1c2VyKSByZXR1cm4gcmVzLmpzb24oe3N1Y2Nlc3M6IHRydWV9KTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N1Y2Nlc3M6IGZhbHNlfSk7XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZS5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLE9BQU9BLFNBQVMsTUFBTSxzQkFBc0I7QUFDNUMsT0FBT0MsSUFBSSxNQUFNLHNCQUFzQjtBQUV2QyxlQUFlLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFBQTtFQUFBO0VBQzVDLElBQUk7SUFDQSxNQUFNQyxLQUFLLDZCQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsS0FBSztJQUFDO0lBQzlCLElBQUksQ0FBQ0EsS0FBSyxFQUFFO01BQUE7TUFBQTtNQUFBLE9BQU9ELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBQ0MsT0FBTyxFQUFFO01BQUssQ0FBQyxDQUFDO0lBQUEsQ0FBQztNQUFBO0lBQUE7SUFBQTtJQUUxRCxNQUFNVCxTQUFTLEVBQUU7O0lBRWpCO0lBQ0EsTUFBTVUsSUFBSSw2QkFBRyxNQUFNVCxJQUFJLENBQUNVLE9BQU8sQ0FBQztNQUFDTixLQUFLLEVBQUVBO0lBQUssQ0FBQyxDQUFDO0lBQUE7SUFDL0MsSUFBSUssSUFBSSxFQUFFO01BQUE7TUFBQTtNQUFBLE9BQU9OLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDO1FBQUNDLE9BQU8sRUFBRTtNQUFJLENBQUMsQ0FBQztJQUFBLENBQUM7TUFBQTtJQUFBO0lBQUE7SUFDM0MsT0FBT0wsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztNQUFDQyxPQUFPLEVBQUU7SUFBSyxDQUFDLENBQUM7RUFFakQsQ0FBQyxDQUFDLE9BQU9HLENBQUMsRUFBRTtJQUFBO0lBQ1JSLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFBRUssS0FBSyxFQUFFRCxDQUFDLENBQUNFO0lBQVEsQ0FBQyxDQUFDO0VBQzlDO0FBQ0oifQ==