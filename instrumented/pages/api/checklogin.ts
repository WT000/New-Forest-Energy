function cov_2ha3s2od2v() {
  var path = "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\checklogin.ts";
  var hash = "ea768f6578e00f8fc48d367c9674ce0c313fde0c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\checklogin.ts",
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
          column: 27
        },
        end: {
          line: 6,
          column: 47
        }
      },
      "2": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 7,
          column: 71
        }
      },
      "3": {
        start: {
          line: 7,
          column: 25
        },
        end: {
          line: 7,
          column: 71
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
          column: 24
        },
        end: {
          line: 12,
          column: 71
        }
      },
      "6": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 54
        }
      },
      "7": {
        start: {
          line: 13,
          column: 21
        },
        end: {
          line: 13,
          column: 54
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
            column: 71
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
            column: 71
          }
        }, {
          start: {
            line: 7,
            column: 8
          },
          end: {
            line: 7,
            column: 71
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
            column: 54
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
            column: 54
          }
        }, {
          start: {
            line: 13,
            column: 8
          },
          end: {
            line: 13,
            column: 54
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
    hash: "ea768f6578e00f8fc48d367c9674ce0c313fde0c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ha3s2od2v = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ha3s2od2v();
import dbConnect from "../../db/dbcon/dbcon";
import Booking from "../../db/models/Booking";
export default async function handler(req, res) {
  cov_2ha3s2od2v().f[0]++;
  cov_2ha3s2od2v().s[0]++;
  try {
    const friendlyId = (cov_2ha3s2od2v().s[1]++, req.query.friendlyId);
    cov_2ha3s2od2v().s[2]++;
    if (!friendlyId) {
      cov_2ha3s2od2v().b[0][0]++;
      cov_2ha3s2od2v().s[3]++;
      return res.status(400).json({
        success: false
      });
    } else {
      cov_2ha3s2od2v().b[0][1]++;
    }
    cov_2ha3s2od2v().s[4]++;
    await dbConnect();

    // Find email in db
    const booking = (cov_2ha3s2od2v().s[5]++, await Booking.findOne({
      friendlyId: friendlyId
    }));
    cov_2ha3s2od2v().s[6]++;
    if (booking) {
      cov_2ha3s2od2v().b[1][0]++;
      cov_2ha3s2od2v().s[7]++;
      return res.json({
        success: true
      });
    } else {
      cov_2ha3s2od2v().b[1][1]++;
    }
    cov_2ha3s2od2v().s[8]++;
    return res.status(404).json({
      success: false
    });
  } catch (e) {
    cov_2ha3s2od2v().s[9]++;
    res.status(500).json({
      error: e.message
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJCb29raW5nIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZyaWVuZGx5SWQiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiYm9va2luZyIsImZpbmRPbmUiLCJlIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZXMiOlsiY2hlY2tsb2dpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi9kYi9kYmNvbi9kYmNvblwiO1xyXG5pbXBvcnQgQm9va2luZyBmcm9tIFwiLi4vLi4vZGIvbW9kZWxzL0Jvb2tpbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZnJpZW5kbHlJZCA9IHJlcS5xdWVyeS5mcmllbmRseUlkO1xyXG4gICAgICAgIGlmICghZnJpZW5kbHlJZCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOiBmYWxzZX0pO1xyXG5cclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgLy8gRmluZCBlbWFpbCBpbiBkYlxyXG4gICAgICAgIGNvbnN0IGJvb2tpbmcgPSBhd2FpdCBCb29raW5nLmZpbmRPbmUoe2ZyaWVuZGx5SWQ6IGZyaWVuZGx5SWR9KVxyXG4gICAgICAgIGlmIChib29raW5nKSByZXR1cm4gcmVzLmpzb24oe3N1Y2Nlc3M6IHRydWV9KTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N1Y2Nlc3M6IGZhbHNlfSk7XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZS5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLE9BQU9BLFNBQVMsTUFBTSxzQkFBc0I7QUFDNUMsT0FBT0MsT0FBTyxNQUFNLHlCQUF5QjtBQUU3QyxlQUFlLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFBQTtFQUFBO0VBQzVDLElBQUk7SUFDQSxNQUFNQyxVQUFVLDZCQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsVUFBVTtJQUFDO0lBQ3hDLElBQUksQ0FBQ0EsVUFBVSxFQUFFO01BQUE7TUFBQTtNQUFBLE9BQU9ELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBQ0MsT0FBTyxFQUFFO01BQUssQ0FBQyxDQUFDO0lBQUEsQ0FBQztNQUFBO0lBQUE7SUFBQTtJQUUvRCxNQUFNVCxTQUFTLEVBQUU7O0lBRWpCO0lBQ0EsTUFBTVUsT0FBTyw2QkFBRyxNQUFNVCxPQUFPLENBQUNVLE9BQU8sQ0FBQztNQUFDTixVQUFVLEVBQUVBO0lBQVUsQ0FBQyxDQUFDO0lBQUE7SUFDL0QsSUFBSUssT0FBTyxFQUFFO01BQUE7TUFBQTtNQUFBLE9BQU9OLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDO1FBQUNDLE9BQU8sRUFBRTtNQUFJLENBQUMsQ0FBQztJQUFBLENBQUM7TUFBQTtJQUFBO0lBQUE7SUFDOUMsT0FBT0wsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztNQUFDQyxPQUFPLEVBQUU7SUFBSyxDQUFDLENBQUM7RUFFakQsQ0FBQyxDQUFDLE9BQU9HLENBQUMsRUFBRTtJQUFBO0lBQ1JSLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFBRUssS0FBSyxFQUFFRCxDQUFDLENBQUNFO0lBQVEsQ0FBQyxDQUFDO0VBQzlDO0FBQ0oifQ==