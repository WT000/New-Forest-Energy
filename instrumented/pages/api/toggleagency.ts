function cov_2l4smiy7vp() {
  var path = "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\toggleagency.ts";
  var hash = "bac06fe32c4c7ddaf38ce0abe3e145032af94c97";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\toggleagency.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "1": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 26
        }
      },
      "2": {
        start: {
          line: 10,
          column: 24
        },
        end: {
          line: 10,
          column: 69
        }
      },
      "3": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 18,
          column: 9
        }
      },
      "4": {
        start: {
          line: 13,
          column: 12
        },
        end: {
          line: 13,
          column: 115
        }
      },
      "5": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 40
        }
      },
      "6": {
        start: {
          line: 17,
          column: 12
        },
        end: {
          line: 17,
          column: 69
        }
      },
      "7": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "handler",
        decl: {
          start: {
            line: 6,
            column: 30
          },
          end: {
            line: 6,
            column: 37
          }
        },
        loc: {
          start: {
            line: 6,
            column: 48
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
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
            line: 12,
            column: 8
          },
          end: {
            line: 18,
            column: 9
          }
        }, {
          start: {
            line: 12,
            column: 8
          },
          end: {
            line: 18,
            column: 9
          }
        }],
        line: 12
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
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bac06fe32c4c7ddaf38ce0abe3e145032af94c97"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2l4smiy7vp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2l4smiy7vp();
import dbConnect from "../../db/dbcon/dbcon";
import { getServerSession } from "../../hooks/getServerSession";
import { authOptions } from "./auth/[...nextauth]";
import User from "../../db/models/User";
export default async function handler(req, res) {
  cov_2l4smiy7vp().f[0]++;
  cov_2l4smiy7vp().s[0]++;
  try {
    cov_2l4smiy7vp().s[1]++;
    // await dbConnect() - This would be done if using models
    await dbConnect();
    const session = (cov_2l4smiy7vp().s[2]++, await getServerSession(req, res, authOptions));
    cov_2l4smiy7vp().s[3]++;
    if (session) {
      cov_2l4smiy7vp().b[0][0]++;
      cov_2l4smiy7vp().s[4]++;
      await User.findOneAndUpdate({
        _id: session.user.id
      }, [{
        $set: {
          isAgency: {
            $not: "$isAgency"
          }
        }
      }]);
      // session.user.isAgency = !session.user.isAgency;
      cov_2l4smiy7vp().s[5]++;
      res.json({
        success: true
      });
    } else {
      cov_2l4smiy7vp().b[0][1]++;
      cov_2l4smiy7vp().s[6]++;
      res.status(403).json({
        error: "You're not signed in!"
      });
    }
  } catch (e) {
    cov_2l4smiy7vp().s[7]++;
    res.status(500).json({
      error: e.message
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJVc2VyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNlc3Npb24iLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwidXNlciIsImlkIiwiJHNldCIsImlzQWdlbmN5IiwiJG5vdCIsImpzb24iLCJzdWNjZXNzIiwic3RhdHVzIiwiZXJyb3IiLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VzIjpbInRvZ2dsZWFnZW5jeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi9kYi9kYmNvbi9kYmNvblwiO1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIi4uLy4uL2hvb2tzL2dldFNlcnZlclNlc3Npb25cIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi9hdXRoL1suLi5uZXh0YXV0aF1cIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL2RiL21vZGVscy9Vc2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGF3YWl0IGRiQ29ubmVjdCgpIC0gVGhpcyB3b3VsZCBiZSBkb25lIGlmIHVzaW5nIG1vZGVsc1xyXG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IFVzZXIuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogc2Vzc2lvbi51c2VyLmlkIH0sIFt7ICRzZXQ6IHsgaXNBZ2VuY3k6IHsgJG5vdDogXCIkaXNBZ2VuY3lcIiB9IH0gfV0pO1xyXG4gICAgICAgICAgICAvLyBzZXNzaW9uLnVzZXIuaXNBZ2VuY3kgPSAhc2Vzc2lvbi51c2VyLmlzQWdlbmN5O1xyXG4gICAgICAgICAgICByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBlcnJvcjogXCJZb3UncmUgbm90IHNpZ25lZCBpbiFcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZS5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixPQUFPQSxTQUFTLE1BQU0sc0JBQXNCO0FBQzVDLFNBQVNDLGdCQUFnQixRQUFRLDhCQUE4QjtBQUMvRCxTQUFTQyxXQUFXLFFBQVEsc0JBQXNCO0FBQ2xELE9BQU9DLElBQUksTUFBTSxzQkFBc0I7QUFFdkMsZUFBZSxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQUE7RUFBQTtFQUM1QyxJQUFJO0lBQUE7SUFDQTtJQUNBLE1BQU1OLFNBQVMsRUFBRTtJQUNqQixNQUFNTyxPQUFPLDZCQUFHLE1BQU1OLGdCQUFnQixDQUFDSSxHQUFHLEVBQUVDLEdBQUcsRUFBRUosV0FBVyxDQUFDO0lBQUM7SUFFOUQsSUFBSUssT0FBTyxFQUFFO01BQUE7TUFBQTtNQUNULE1BQU1KLElBQUksQ0FBQ0ssZ0JBQWdCLENBQUM7UUFBRUMsR0FBRyxFQUFFRixPQUFPLENBQUNHLElBQUksQ0FBQ0M7TUFBRyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxJQUFJLEVBQUU7VUFBRUMsUUFBUSxFQUFFO1lBQUVDLElBQUksRUFBRTtVQUFZO1FBQUU7TUFBRSxDQUFDLENBQUMsQ0FBQztNQUN0RztNQUFBO01BQ0FSLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBRTtNQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDLE1BQU07TUFBQTtNQUFBO01BQ0hWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRixJQUFJLENBQUM7UUFBRUcsS0FBSyxFQUFFO01BQXdCLENBQUMsQ0FBQztJQUM1RDtFQUNKLENBQUMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7SUFBQTtJQUNSYixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0YsSUFBSSxDQUFDO01BQUVHLEtBQUssRUFBRUMsQ0FBQyxDQUFDQztJQUFRLENBQUMsQ0FBQztFQUM5QztBQUNKIn0=