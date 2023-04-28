function cov_1lrnjutdmg() {
  var path = "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\homes\\[id]\\index.ts";
  var hash = "d91e4881f0975a2b8b0c29e10b7bd0a095127025";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\homes\\[id]\\index.ts",
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
          column: 82
        }
      },
      "9": {
        start: {
          line: 25,
          column: 12
        },
        end: {
          line: 25,
          column: 68
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
    hash: "d91e4881f0975a2b8b0c29e10b7bd0a095127025"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1lrnjutdmg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1lrnjutdmg();
import { getServerSession } from "../../../../hooks/getServerSession";
import { authOptions } from "../../auth/[...nextauth]";
import dbConnect from "../../../../db/dbcon/dbcon";
import Home from "../../../../db/models/Home";
import getRole from "../../../../lib/utils/getRole";
import Role from "../../../../lib/utils/roles";
export default async function handler(req, res) {
  cov_1lrnjutdmg().f[0]++;
  cov_1lrnjutdmg().s[0]++;
  try {
    const {
      id
    } = (cov_1lrnjutdmg().s[1]++, req.query);
    const session = (cov_1lrnjutdmg().s[2]++, await getServerSession(req, res, authOptions));
    cov_1lrnjutdmg().s[3]++;
    console.log(getRole(session));
    cov_1lrnjutdmg().s[4]++;
    if (getRole(session) != Role.Agency) {
      cov_1lrnjutdmg().b[0][0]++;
      cov_1lrnjutdmg().s[5]++;
      return res.status(400).json({
        success: false
      });
    } else {
      cov_1lrnjutdmg().b[0][1]++;
    }
    cov_1lrnjutdmg().s[6]++;
    if (req.method === "DELETE") {
      cov_1lrnjutdmg().b[1][0]++;
      cov_1lrnjutdmg().s[7]++;
      await dbConnect();
      const deletedHome = (cov_1lrnjutdmg().s[8]++, await Home.updateOne({
        _id: id
      }, {
        isDeleted: true
      }));
      cov_1lrnjutdmg().s[9]++;
      return res.json({
        success: deletedHome.matchedCount > 0
      });
    } else {
      cov_1lrnjutdmg().b[1][1]++;
    }
  } catch (e) {
    cov_1lrnjutdmg().s[10]++;
    res.status(500).json({
      error: e.message
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJkYkNvbm5lY3QiLCJIb21lIiwiZ2V0Um9sZSIsIlJvbGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiQWdlbmN5Iiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJtZXRob2QiLCJkZWxldGVkSG9tZSIsInVwZGF0ZU9uZSIsIl9pZCIsImlzRGVsZXRlZCIsIm1hdGNoZWRDb3VudCIsImUiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlcyI6WyJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hvb2tzL2dldFNlcnZlclNlc3Npb25cIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYXV0aC9bLi4ubmV4dGF1dGhdXCI7XHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uLy4uL2RiL2RiY29uL2RiY29uXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi8uLi8uLi8uLi9kYi9tb2RlbHMvSG9tZVwiO1xyXG5pbXBvcnQgZ2V0Um9sZSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL3V0aWxzL2dldFJvbGVcIjtcclxuaW1wb3J0IFJvbGUgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi91dGlscy9yb2xlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnlcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEsIHJlcywgYXV0aE9wdGlvbnMpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhnZXRSb2xlKHNlc3Npb24pKVxyXG5cclxuICAgICAgICBpZiAoZ2V0Um9sZShzZXNzaW9uKSAhPSBSb2xlLkFnZW5jeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXEubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlZEhvbWUgPSBhd2FpdCBIb21lLnVwZGF0ZU9uZSh7X2lkOiBpZH0sIHtpc0RlbGV0ZWQ6IHRydWV9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtzdWNjZXNzOiBkZWxldGVkSG9tZS5tYXRjaGVkQ291bnQgPiAwfSlcclxuICAgICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLFNBQVNBLGdCQUFnQixRQUFRLG9DQUFvQztBQUNyRSxTQUFTQyxXQUFXLFFBQVEsMEJBQTBCO0FBQ3RELE9BQU9DLFNBQVMsTUFBTSw0QkFBNEI7QUFDbEQsT0FBT0MsSUFBSSxNQUFNLDRCQUE0QjtBQUM3QyxPQUFPQyxPQUFPLE1BQU0sK0JBQStCO0FBQ25ELE9BQU9DLElBQUksTUFBTSw2QkFBNkI7QUFFOUMsZUFBZSxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQUE7RUFBQTtFQUM1QyxJQUFJO0lBQ0EsTUFBTTtNQUFFQztJQUFHLENBQUMsNkJBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUV4QixNQUFNQyxPQUFPLDZCQUFHLE1BQU1YLGdCQUFnQixDQUFDTyxHQUFHLEVBQUVDLEdBQUcsRUFBRVAsV0FBVyxDQUFDO0lBQUM7SUFFOURXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxPQUFPLENBQUNPLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFFN0IsSUFBSVAsT0FBTyxDQUFDTyxPQUFPLENBQUMsSUFBSU4sSUFBSSxDQUFDUyxNQUFNLEVBQUU7TUFBQTtNQUFBO01BQ2pDLE9BQU9OLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsT0FBTyxFQUFFO01BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7TUFBQTtJQUFBO0lBQUE7SUFFRCxJQUFJVixHQUFHLENBQUNXLE1BQU0sS0FBSyxRQUFRLEVBQUU7TUFBQTtNQUFBO01BQ3pCLE1BQU1oQixTQUFTLEVBQUU7TUFFakIsTUFBTWlCLFdBQVcsNkJBQUcsTUFBTWhCLElBQUksQ0FBQ2lCLFNBQVMsQ0FBQztRQUFDQyxHQUFHLEVBQUVaO01BQUUsQ0FBQyxFQUFFO1FBQUNhLFNBQVMsRUFBRTtNQUFJLENBQUMsQ0FBQztNQUFBO01BRXRFLE9BQU9kLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDO1FBQUNDLE9BQU8sRUFBRUUsV0FBVyxDQUFDSSxZQUFZLEdBQUc7TUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztNQUFBO0lBQUE7RUFDUCxDQUFDLENBQUMsT0FBT0MsQ0FBQyxFQUFFO0lBQUE7SUFDUmhCLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFBRVMsS0FBSyxFQUFFRCxDQUFDLENBQUNFO0lBQVEsQ0FBQyxDQUFDO0VBQzlDO0FBQ0oifQ==