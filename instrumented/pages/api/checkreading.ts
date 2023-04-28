function cov_z0yvor18z() {
  var path = "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\checkreading.ts";
  var hash = "8092d9b634bb5e25f570b620ff3678a1bf7ef75d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\checkreading.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 26,
          column: 5
        }
      },
      "1": {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 6,
          column: 39
        }
      },
      "2": {
        start: {
          line: 7,
          column: 27
        },
        end: {
          line: 7,
          column: 47
        }
      },
      "3": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 82
        }
      },
      "4": {
        start: {
          line: 9,
          column: 36
        },
        end: {
          line: 9,
          column: 82
        }
      },
      "5": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 26
        }
      },
      "6": {
        start: {
          line: 16,
          column: 30
        },
        end: {
          line: 16,
          column: 100
        }
      },
      "7": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 34
        }
      },
      "8": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 98
        }
      },
      "9": {
        start: {
          line: 20,
          column: 65
        },
        end: {
          line: 20,
          column: 98
        }
      },
      "10": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 54
        }
      },
      "11": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
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
            line: 27,
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
            line: 9,
            column: 8
          },
          end: {
            line: 9,
            column: 82
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 9,
            column: 8
          },
          end: {
            line: 9,
            column: 82
          }
        }, {
          start: {
            line: 9,
            column: 8
          },
          end: {
            line: 9,
            column: 82
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 9,
            column: 34
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 9,
            column: 19
          }
        }, {
          start: {
            line: 9,
            column: 23
          },
          end: {
            line: 9,
            column: 34
          }
        }],
        line: 9
      },
      "2": {
        loc: {
          start: {
            line: 20,
            column: 8
          },
          end: {
            line: 20,
            column: 98
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 8
          },
          end: {
            line: 20,
            column: 98
          }
        }, {
          start: {
            line: 20,
            column: 8
          },
          end: {
            line: 20,
            column: 98
          }
        }],
        line: 20
      },
      "3": {
        loc: {
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 20,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 20,
            column: 12
          },
          end: {
            line: 20,
            column: 26
          }
        }, {
          start: {
            line: 20,
            column: 30
          },
          end: {
            line: 20,
            column: 63
          }
        }],
        line: 20
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
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8092d9b634bb5e25f570b620ff3678a1bf7ef75d"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_z0yvor18z = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_z0yvor18z();
import dbConnect from "../../db/dbcon/dbcon";
import Reading from "../../db/models/Reading";
export default async function handler(req, res) {
  cov_z0yvor18z().f[0]++;
  cov_z0yvor18z().s[0]++;
  try {
    const homeId = (cov_z0yvor18z().s[1]++, req.query.homeId);
    const readingVal = (cov_z0yvor18z().s[2]++, req.query.readingVal);
    cov_z0yvor18z().s[3]++;
    if ((cov_z0yvor18z().b[1][0]++, !homeId) || (cov_z0yvor18z().b[1][1]++, !readingVal)) {
      cov_z0yvor18z().b[0][0]++;
      cov_z0yvor18z().s[4]++;
      return res.status(400).json({
        success: false
      });
    } else {
      cov_z0yvor18z().b[0][1]++;
    }
    cov_z0yvor18z().s[5]++;
    await dbConnect();

    // Find email in db
    const latestReading = (cov_z0yvor18z().s[6]++, await Reading.findOne({
      home: homeId
    }).sort({
      "createdAt": -1
    }).limit(1));
    cov_z0yvor18z().s[7]++;
    console.log(latestReading);
    cov_z0yvor18z().s[8]++;
    if ((cov_z0yvor18z().b[3][0]++, !latestReading) || (cov_z0yvor18z().b[3][1]++, latestReading.value <= readingVal)) {
      cov_z0yvor18z().b[2][0]++;
      cov_z0yvor18z().s[9]++;
      return res.json({
        success: true
      });
    } else {
      cov_z0yvor18z().b[2][1]++;
    }
    cov_z0yvor18z().s[10]++;
    return res.status(404).json({
      success: false
    });
  } catch (e) {
    cov_z0yvor18z().s[11]++;
    res.status(500).json({
      error: e.message
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJSZWFkaW5nIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImhvbWVJZCIsInF1ZXJ5IiwicmVhZGluZ1ZhbCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibGF0ZXN0UmVhZGluZyIsImZpbmRPbmUiLCJob21lIiwic29ydCIsImxpbWl0IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiZSIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VzIjpbImNoZWNrcmVhZGluZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi9kYi9kYmNvbi9kYmNvblwiO1xyXG5pbXBvcnQgUmVhZGluZyBmcm9tIFwiLi4vLi4vZGIvbW9kZWxzL1JlYWRpbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaG9tZUlkID0gcmVxLnF1ZXJ5LmhvbWVJZDtcclxuICAgICAgICBjb25zdCByZWFkaW5nVmFsID0gcmVxLnF1ZXJ5LnJlYWRpbmdWYWw7XHJcblxyXG4gICAgICAgIGlmICghaG9tZUlkIHx8ICFyZWFkaW5nVmFsKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6IGZhbHNlfSk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgLy8gRmluZCBlbWFpbCBpbiBkYlxyXG4gICAgICAgIGNvbnN0IGxhdGVzdFJlYWRpbmcgPSBhd2FpdCBSZWFkaW5nLmZpbmRPbmUoe2hvbWU6IGhvbWVJZH0pLnNvcnQoe1wiY3JlYXRlZEF0XCI6IC0xfSkubGltaXQoMSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxhdGVzdFJlYWRpbmcpXHJcblxyXG4gICAgICAgIGlmICghbGF0ZXN0UmVhZGluZyB8fCBsYXRlc3RSZWFkaW5nLnZhbHVlIDw9IHJlYWRpbmdWYWwpIHJldHVybiByZXMuanNvbih7c3VjY2VzczogdHJ1ZX0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N1Y2Nlc3M6IGZhbHNlfSk7XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZS5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBO0FBZlosT0FBT0EsU0FBUyxNQUFNLHNCQUFzQjtBQUM1QyxPQUFPQyxPQUFPLE1BQU0seUJBQXlCO0FBRTdDLGVBQWUsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUFBO0VBQUE7RUFDNUMsSUFBSTtJQUNBLE1BQU1DLE1BQU0sNEJBQUdGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRCxNQUFNO0lBQy9CLE1BQU1FLFVBQVUsNEJBQUdKLEdBQUcsQ0FBQ0csS0FBSyxDQUFDQyxVQUFVO0lBQUM7SUFFeEMsSUFBSSw2QkFBQ0YsTUFBTSxpQ0FBSSxDQUFDRSxVQUFVLEdBQUU7TUFBQTtNQUFBO01BQUEsT0FBT0gsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFDQyxPQUFPLEVBQUU7TUFBSyxDQUFDLENBQUM7SUFBQSxDQUFDO01BQUE7SUFBQTtJQUFBO0lBSTFFLE1BQU1WLFNBQVMsRUFBRTs7SUFFakI7SUFDQSxNQUFNVyxhQUFhLDRCQUFHLE1BQU1WLE9BQU8sQ0FBQ1csT0FBTyxDQUFDO01BQUNDLElBQUksRUFBRVI7SUFBTSxDQUFDLENBQUMsQ0FBQ1MsSUFBSSxDQUFDO01BQUMsV0FBVyxFQUFFLENBQUM7SUFBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUFDO0lBRTdGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sYUFBYSxDQUFDO0lBQUE7SUFFMUIsSUFBSSw2QkFBQ0EsYUFBYSxpQ0FBSUEsYUFBYSxDQUFDTyxLQUFLLElBQUlYLFVBQVUsR0FBRTtNQUFBO01BQUE7TUFBQSxPQUFPSCxHQUFHLENBQUNLLElBQUksQ0FBQztRQUFDQyxPQUFPLEVBQUU7TUFBSSxDQUFDLENBQUM7SUFBQSxDQUFDO01BQUE7SUFBQTtJQUFBO0lBRTFGLE9BQU9OLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFBQ0MsT0FBTyxFQUFFO0lBQUssQ0FBQyxDQUFDO0VBRWpELENBQUMsQ0FBQyxPQUFPUyxDQUFDLEVBQUU7SUFBQTtJQUNSZixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO01BQUVXLEtBQUssRUFBRUQsQ0FBQyxDQUFDRTtJQUFRLENBQUMsQ0FBQztFQUM5QztBQUNKIn0=