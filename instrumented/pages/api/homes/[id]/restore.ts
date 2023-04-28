function cov_nwj5g7cx0() {
  var path = "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\homes\\[id]\\restore.ts";
  var hash = "94ae523c87f4b16f25cdcf148274ece106f3bcb3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\homes\\[id]\\restore.ts",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 29,
          column: 5
        }
      },
      "1": {
        start: {
          line: 10,
          column: 23
        },
        end: {
          line: 10,
          column: 32
        }
      },
      "2": {
        start: {
          line: 12,
          column: 24
        },
        end: {
          line: 12,
          column: 69
        }
      },
      "3": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 37
        }
      },
      "4": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 18,
          column: 9
        }
      },
      "5": {
        start: {
          line: 17,
          column: 12
        },
        end: {
          line: 17,
          column: 60
        }
      },
      "6": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 26,
          column: 11
        }
      },
      "7": {
        start: {
          line: 21,
          column: 12
        },
        end: {
          line: 21,
          column: 30
        }
      },
      "8": {
        start: {
          line: 23,
          column: 32
        },
        end: {
          line: 23,
          column: 90
        }
      },
      "9": {
        start: {
          line: 25,
          column: 12
        },
        end: {
          line: 25,
          column: 48
        }
      },
      "10": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 28,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "handler",
        decl: {
          start: {
            line: 8,
            column: 30
          },
          end: {
            line: 8,
            column: 37
          }
        },
        loc: {
          start: {
            line: 8,
            column: 48
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 18,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 18,
            column: 9
          }
        }, {
          start: {
            line: 16,
            column: 8
          },
          end: {
            line: 18,
            column: 9
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 20,
            column: 8
          },
          end: {
            line: 26,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 20,
            column: 8
          },
          end: {
            line: 26,
            column: 11
          }
        }, {
          start: {
            line: 20,
            column: 8
          },
          end: {
            line: 26,
            column: 11
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
      "10": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "94ae523c87f4b16f25cdcf148274ece106f3bcb3"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_nwj5g7cx0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_nwj5g7cx0();
import { getServerSession } from "../../../../hooks/getServerSession";
import { authOptions } from "../../auth/[...nextauth]";
import dbConnect from "../../../../db/dbcon/dbcon";
import Home from "../../../../db/models/Home";
import getRole from "../../../../lib/utils/getRole";
import Role from "../../../../lib/utils/roles";
export default async function handler(req, res) {
  cov_nwj5g7cx0().f[0]++;
  cov_nwj5g7cx0().s[0]++;
  try {
    const {
      id
    } = (cov_nwj5g7cx0().s[1]++, req.query);
    const session = (cov_nwj5g7cx0().s[2]++, await getServerSession(req, res, authOptions));
    cov_nwj5g7cx0().s[3]++;
    console.log(getRole(session));
    cov_nwj5g7cx0().s[4]++;
    if (getRole(session) != Role.Agency) {
      cov_nwj5g7cx0().b[0][0]++;
      cov_nwj5g7cx0().s[5]++;
      return res.status(400).json({
        success: false
      });
    } else {
      cov_nwj5g7cx0().b[0][1]++;
    }
    cov_nwj5g7cx0().s[6]++;
    if (req.method === "PUT") {
      cov_nwj5g7cx0().b[1][0]++;
      cov_nwj5g7cx0().s[7]++;
      await dbConnect();
      const deletedHome = (cov_nwj5g7cx0().s[8]++, await Home.findOneAndUpdate({
        _id: id
      }, {
        isDeleted: false
      }));
      cov_nwj5g7cx0().s[9]++;
      return res.json({
        home: deletedHome
      });
    } else {
      cov_nwj5g7cx0().b[1][1]++;
    }
  } catch (e) {
    cov_nwj5g7cx0().s[10]++;
    res.status(500).json({
      error: e.message
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJkYkNvbm5lY3QiLCJIb21lIiwiZ2V0Um9sZSIsIlJvbGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiQWdlbmN5Iiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJtZXRob2QiLCJkZWxldGVkSG9tZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJfaWQiLCJpc0RlbGV0ZWQiLCJob21lIiwiZSIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VzIjpbInJlc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9ob29rcy9nZXRTZXJ2ZXJTZXNzaW9uXCI7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2F1dGgvWy4uLm5leHRhdXRoXVwiO1xyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi8uLi9kYi9kYmNvbi9kYmNvblwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vLi4vLi4vLi4vZGIvbW9kZWxzL0hvbWVcIjtcclxuaW1wb3J0IGdldFJvbGUgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi91dGlscy9nZXRSb2xlXCI7XHJcbmltcG9ydCBSb2xlIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvdXRpbHMvcm9sZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24ocmVxLCByZXMsIGF1dGhPcHRpb25zKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZ2V0Um9sZShzZXNzaW9uKSlcclxuXHJcbiAgICAgICAgaWYgKGdldFJvbGUoc2Vzc2lvbikgIT0gUm9sZS5BZ2VuY3kpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQVVRcIikge1xyXG4gICAgICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRIb21lID0gYXdhaXQgSG9tZS5maW5kT25lQW5kVXBkYXRlKHtfaWQ6IGlkfSwge2lzRGVsZXRlZDogZmFsc2V9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtob21lOiBkZWxldGVkSG9tZX0pXHJcbiAgICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZS5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFTQSxnQkFBZ0IsUUFBUSxvQ0FBb0M7QUFDckUsU0FBU0MsV0FBVyxRQUFRLDBCQUEwQjtBQUN0RCxPQUFPQyxTQUFTLE1BQU0sNEJBQTRCO0FBQ2xELE9BQU9DLElBQUksTUFBTSw0QkFBNEI7QUFDN0MsT0FBT0MsT0FBTyxNQUFNLCtCQUErQjtBQUNuRCxPQUFPQyxJQUFJLE1BQU0sNkJBQTZCO0FBRTlDLGVBQWUsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUFBO0VBQUE7RUFDNUMsSUFBSTtJQUNBLE1BQU07TUFBRUM7SUFBRyxDQUFDLDRCQUFHRixHQUFHLENBQUNHLEtBQUs7SUFFeEIsTUFBTUMsT0FBTyw0QkFBRyxNQUFNWCxnQkFBZ0IsQ0FBQ08sR0FBRyxFQUFFQyxHQUFHLEVBQUVQLFdBQVcsQ0FBQztJQUFDO0lBRTlEVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsT0FBTyxDQUFDTyxPQUFPLENBQUMsQ0FBQztJQUFBO0lBRTdCLElBQUlQLE9BQU8sQ0FBQ08sT0FBTyxDQUFDLElBQUlOLElBQUksQ0FBQ1MsTUFBTSxFQUFFO01BQUE7TUFBQTtNQUNqQyxPQUFPTixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBRTtNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO01BQUE7SUFBQTtJQUFBO0lBRUQsSUFBSVYsR0FBRyxDQUFDVyxNQUFNLEtBQUssS0FBSyxFQUFFO01BQUE7TUFBQTtNQUN0QixNQUFNaEIsU0FBUyxFQUFFO01BRWpCLE1BQU1pQixXQUFXLDRCQUFHLE1BQU1oQixJQUFJLENBQUNpQixnQkFBZ0IsQ0FBQztRQUFDQyxHQUFHLEVBQUVaO01BQUUsQ0FBQyxFQUFFO1FBQUNhLFNBQVMsRUFBRTtNQUFLLENBQUMsQ0FBQztNQUFBO01BRTlFLE9BQU9kLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDO1FBQUNPLElBQUksRUFBRUo7TUFBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQztNQUFBO0lBQUE7RUFDUCxDQUFDLENBQUMsT0FBT0ssQ0FBQyxFQUFFO0lBQUE7SUFDUmhCLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFBRVMsS0FBSyxFQUFFRCxDQUFDLENBQUNFO0lBQVEsQ0FBQyxDQUFDO0VBQzlDO0FBQ0oifQ==