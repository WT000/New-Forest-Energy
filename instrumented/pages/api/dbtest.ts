function cov_1ya3wv8134() {
  var path = "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\dbtest.ts";
  var hash = "63ca1e123fea10ede60fd214f30b0bfac3c70025";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\dbtest.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 38,
          column: 5
        }
      },
      "1": {
        start: {
          line: 6,
          column: 20
        },
        end: {
          line: 6,
          column: 37
        }
      },
      "2": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 35,
          column: 9
        }
      },
      "3": {
        start: {
          line: 10,
          column: 12
        },
        end: {
          line: 26,
          column: 13
        }
      },
      "4": {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 12,
          column: 46
        }
      },
      "5": {
        start: {
          line: 13,
          column: 20
        },
        end: {
          line: 13,
          column: 26
        }
      },
      "6": {
        start: {
          line: 16,
          column: 20
        },
        end: {
          line: 16,
          column: 43
        }
      },
      "7": {
        start: {
          line: 17,
          column: 20
        },
        end: {
          line: 17,
          column: 26
        }
      },
      "8": {
        start: {
          line: 20,
          column: 20
        },
        end: {
          line: 20,
          column: 44
        }
      },
      "9": {
        start: {
          line: 21,
          column: 20
        },
        end: {
          line: 21,
          column: 26
        }
      },
      "10": {
        start: {
          line: 24,
          column: 20
        },
        end: {
          line: 24,
          column: 47
        }
      },
      "11": {
        start: {
          line: 25,
          column: 20
        },
        end: {
          line: 25,
          column: 26
        }
      },
      "12": {
        start: {
          line: 28,
          column: 12
        },
        end: {
          line: 32,
          column: 15
        }
      },
      "13": {
        start: {
          line: 34,
          column: 12
        },
        end: {
          line: 34,
          column: 62
        }
      },
      "14": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "handler",
        decl: {
          start: {
            line: 3,
            column: 30
          },
          end: {
            line: 3,
            column: 37
          }
        },
        loc: {
          start: {
            line: 3,
            column: 48
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        }, {
          start: {
            line: 8,
            column: 8
          },
          end: {
            line: 35,
            column: 9
          }
        }],
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 12
          },
          end: {
            line: 26,
            column: 13
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 13,
            column: 26
          }
        }, {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 17,
            column: 26
          }
        }, {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 21,
            column: 26
          }
        }, {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 25,
            column: 26
          }
        }],
        line: 10
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
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "63ca1e123fea10ede60fd214f30b0bfac3c70025"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ya3wv8134 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1ya3wv8134();
import dbConnect from "../../db/dbcon/dbcon";
export default async function handler(req, res) {
  cov_1ya3wv8134().f[0]++;
  cov_1ya3wv8134().s[0]++;
  try {
    // await dbConnect() - This would be done if using models
    const con = (cov_1ya3wv8134().s[1]++, await dbConnect());
    cov_1ya3wv8134().s[2]++;
    if (con) {
      cov_1ya3wv8134().b[0][0]++;
      let conState;
      cov_1ya3wv8134().s[3]++;
      switch (con.connections[0]._readyState) {
        case 0:
          cov_1ya3wv8134().b[1][0]++;
          cov_1ya3wv8134().s[4]++;
          conState = "disconnected";
          cov_1ya3wv8134().s[5]++;
          break;
        case 1:
          cov_1ya3wv8134().b[1][1]++;
          cov_1ya3wv8134().s[6]++;
          conState = "connected";
          cov_1ya3wv8134().s[7]++;
          break;
        case 2:
          cov_1ya3wv8134().b[1][2]++;
          cov_1ya3wv8134().s[8]++;
          conState = "connecting";
          cov_1ya3wv8134().s[9]++;
          break;
        case 3:
          cov_1ya3wv8134().b[1][3]++;
          cov_1ya3wv8134().s[10]++;
          conState = "disconnecting";
          cov_1ya3wv8134().s[11]++;
          break;
      }
      ;
      cov_1ya3wv8134().s[12]++;
      res.status(200).json({
        success: true,
        env: process.env.NODE_ENV,
        connection: conState
      });
    } else {
      cov_1ya3wv8134().b[0][1]++;
      cov_1ya3wv8134().s[13]++;
      res.status(500).json({
        error: "Couldn't connect"
      });
    }
  } catch (e) {
    cov_1ya3wv8134().s[14]++;
    res.status(500).json({
      error: e.message
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uIiwiY29uU3RhdGUiLCJjb25uZWN0aW9ucyIsIl9yZWFkeVN0YXRlIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlbnYiLCJwcm9jZXNzIiwiTk9ERV9FTlYiLCJjb25uZWN0aW9uIiwiZXJyb3IiLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VzIjpbImRidGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi9kYi9kYmNvbi9kYmNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBhd2FpdCBkYkNvbm5lY3QoKSAtIFRoaXMgd291bGQgYmUgZG9uZSBpZiB1c2luZyBtb2RlbHNcclxuICAgICAgICBjb25zdCBjb24gPSBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbikge1xyXG4gICAgICAgICAgICBsZXQgY29uU3RhdGU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY29uLmNvbm5lY3Rpb25zWzBdLl9yZWFkeVN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uU3RhdGUgPSBcImRpc2Nvbm5lY3RlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjb25TdGF0ZSA9IFwiY29ubmVjdGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvblN0YXRlID0gXCJjb25uZWN0aW5nXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvblN0YXRlID0gXCJkaXNjb25uZWN0aW5nXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW52OiBwcm9jZXNzLmVudi5OT0RFX0VOVixcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb246IGNvblN0YXRlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyb3I6IFwiQ291bGRuJ3QgY29ubmVjdFwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGUubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLE9BQU9BLFNBQVMsTUFBTSxzQkFBc0I7QUFFNUMsZUFBZSxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQUE7RUFBQTtFQUM1QyxJQUFJO0lBQ0E7SUFDQSxNQUFNQyxHQUFHLDZCQUFHLE1BQU1KLFNBQVMsRUFBRTtJQUFDO0lBRTlCLElBQUlJLEdBQUcsRUFBRTtNQUFBO01BQ0wsSUFBSUMsUUFBUTtNQUFDO01BQ2IsUUFBUUQsR0FBRyxDQUFDRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVc7UUFDbEMsS0FBSyxDQUFDO1VBQUE7VUFBQTtVQUNGRixRQUFRLEdBQUcsY0FBYztVQUFDO1VBQzFCO1FBRUosS0FBSyxDQUFDO1VBQUE7VUFBQTtVQUNGQSxRQUFRLEdBQUcsV0FBVztVQUFDO1VBQ3ZCO1FBRUosS0FBSyxDQUFDO1VBQUE7VUFBQTtVQUNGQSxRQUFRLEdBQUcsWUFBWTtVQUFDO1VBQ3hCO1FBRUosS0FBSyxDQUFDO1VBQUE7VUFBQTtVQUNGQSxRQUFRLEdBQUcsZUFBZTtVQUFDO1VBQzNCO01BQU07TUFDYjtNQUFDO01BRUZGLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFDakJDLE9BQU8sRUFBRSxJQUFJO1FBQ2JDLEdBQUcsRUFBRUMsT0FBTyxDQUFDRCxHQUFHLENBQUNFLFFBQVE7UUFDekJDLFVBQVUsRUFBRVQ7TUFDaEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNO01BQUE7TUFBQTtNQUNIRixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUNNLEtBQUssRUFBRTtNQUFrQixDQUFDLENBQUM7SUFDckQ7RUFDSixDQUFDLENBQUMsT0FBT0MsQ0FBQyxFQUFFO0lBQUE7SUFDUmIsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztNQUFFTSxLQUFLLEVBQUVDLENBQUMsQ0FBQ0M7SUFBUSxDQUFDLENBQUM7RUFDOUM7QUFDRiJ9