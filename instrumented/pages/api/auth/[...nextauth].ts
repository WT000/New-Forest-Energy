function cov_1fi9vug0je() {
  var path = "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\auth\\[...nextauth].ts";
  var hash = "9bc71aabb8f3175bda42911e5b9b8473a6e25e13";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\pages\\api\\auth\\[...nextauth].ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 27
        },
        end: {
          line: 38,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 32
        }
      },
      "2": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 44
        }
      },
      "3": {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 15,
          column: 21
        }
      },
      "4": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 34,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 35
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 27,
            column: 6
          },
          end: {
            line: 27,
            column: 7
          }
        },
        loc: {
          start: {
            line: 27,
            column: 23
          },
          end: {
            line: 35,
            column: 7
          }
        },
        line: 27
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 30,
            column: 16
          },
          end: {
            line: 30,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 30,
            column: 16
          },
          end: {
            line: 30,
            column: 28
          }
        }, {
          start: {
            line: 30,
            column: 32
          },
          end: {
            line: 30,
            column: 45
          }
        }],
        line: 30
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9bc71aabb8f3175bda42911e5b9b8473a6e25e13"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fi9vug0je = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1fi9vug0je();
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/authcon/mongodb";
export const authOptions = (cov_1fi9vug0je().s[0]++, {
  pages: {
    signIn: '/auth/signin'
  },
  callbacks: {
    async session({
      session,
      user
    }) {
      cov_1fi9vug0je().f[0]++;
      cov_1fi9vug0je().s[1]++;
      // Update the session.user with new fields here, which need to be their database id and isAgency status
      session.user.id = user.id;
      cov_1fi9vug0je().s[2]++;
      session.user.isAgency = user.isAgency;
      cov_1fi9vug0je().s[3]++;
      return session;
    }
  },
  adapter: MongoDBAdapter(clientPromise),
  providers: [GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    allowDangerousEmailAccountLinking: true,
    // Fixes oauth bug

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    profile(profile) {
      cov_1fi9vug0je().f[1]++;
      cov_1fi9vug0je().s[4]++;
      return {
        id: profile.id.toString(),
        name: (cov_1fi9vug0je().b[0][0]++, profile.name) ?? (cov_1fi9vug0je().b[0][1]++, profile.login),
        email: profile.email,
        image: profile.avatar_url,
        isAgency: false // Set agency (admin) to false by default
      };
    }
  })]
});

export default NextAuth(authOptions);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdpdGh1YlByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjbGllbnRQcm9taXNlIiwiYXV0aE9wdGlvbnMiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJpc0FnZW5jeSIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiYWxsb3dEYW5nZXJvdXNFbWFpbEFjY291bnRMaW5raW5nIiwicHJvZmlsZSIsInRvU3RyaW5nIiwibmFtZSIsImxvZ2luIiwiZW1haWwiLCJpbWFnZSIsImF2YXRhcl91cmwiXSwic291cmNlcyI6WyJbLi4ubmV4dGF1dGhdLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcclxuaW1wb3J0IHtNb25nb0RCQWRhcHRlcn0gZnJvbSBcIkBuZXh0LWF1dGgvbW9uZ29kYi1hZGFwdGVyXCI7XHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWIvYXV0aGNvbi9tb25nb2RiXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogJy9hdXRoL3NpZ25pbidcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7c2Vzc2lvbiwgdXNlcn0pIHtcclxuICAgICAgLy8gVXBkYXRlIHRoZSBzZXNzaW9uLnVzZXIgd2l0aCBuZXcgZmllbGRzIGhlcmUsIHdoaWNoIG5lZWQgdG8gYmUgdGhlaXIgZGF0YWJhc2UgaWQgYW5kIGlzQWdlbmN5IHN0YXR1c1xyXG4gICAgICBzZXNzaW9uLnVzZXIuaWQgPSB1c2VyLmlkO1xyXG4gICAgICBzZXNzaW9uLnVzZXIuaXNBZ2VuY3kgPSB1c2VyLmlzQWdlbmN5O1xyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgfSxcclxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxyXG4gICAgICBhbGxvd0Rhbmdlcm91c0VtYWlsQWNjb3VudExpbmtpbmc6IHRydWUsIC8vIEZpeGVzIG9hdXRoIGJ1Z1xyXG5cclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHByb2ZpbGUocHJvZmlsZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogcHJvZmlsZS5pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgbmFtZTogcHJvZmlsZS5uYW1lID8/IHByb2ZpbGUubG9naW4sXHJcbiAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcclxuICAgICAgICAgIGltYWdlOiBwcm9maWxlLmF2YXRhcl91cmwsXHJcbiAgICAgICAgICBpc0FnZW5jeTogZmFsc2UsIC8vIFNldCBhZ2VuY3kgKGFkbWluKSB0byBmYWxzZSBieSBkZWZhdWx0XHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLE9BQU9BLFFBQVEsTUFBTSxXQUFXO0FBQ2hDLE9BQU9DLGNBQWMsTUFBTSw0QkFBNEI7QUFDdkQsU0FBUUMsY0FBYyxRQUFPLDRCQUE0QjtBQUN6RCxPQUFPQyxhQUFhLE1BQU0sOEJBQThCO0FBRXhELE9BQU8sTUFBTUMsV0FBVyw2QkFBRztFQUN6QkMsS0FBSyxFQUFFO0lBQ0xDLE1BQU0sRUFBRTtFQUNWLENBQUM7RUFDREMsU0FBUyxFQUFFO0lBQ1QsTUFBTUMsT0FBTyxDQUFDO01BQUNBLE9BQU87TUFBRUM7SUFBSSxDQUFDLEVBQUU7TUFBQTtNQUFBO01BQzdCO01BQ0FELE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxFQUFFLEdBQUdELElBQUksQ0FBQ0MsRUFBRTtNQUFDO01BQzFCRixPQUFPLENBQUNDLElBQUksQ0FBQ0UsUUFBUSxHQUFHRixJQUFJLENBQUNFLFFBQVE7TUFBQztNQUN0QyxPQUFPSCxPQUFPO0lBQ2hCO0VBQ0YsQ0FBQztFQUNESSxPQUFPLEVBQUVWLGNBQWMsQ0FBQ0MsYUFBYSxDQUFDO0VBQ3RDVSxTQUFTLEVBQUUsQ0FDVFosY0FBYyxDQUFDO0lBQ2JhLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7SUFDL0JDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7SUFDdkNDLGlDQUFpQyxFQUFFLElBQUk7SUFBRTs7SUFFekM7SUFDQTtJQUNBQyxPQUFPLENBQUNBLE9BQU8sRUFBRTtNQUFBO01BQUE7TUFDZixPQUFPO1FBQ0xYLEVBQUUsRUFBRVcsT0FBTyxDQUFDWCxFQUFFLENBQUNZLFFBQVEsRUFBRTtRQUN6QkMsSUFBSSxFQUFFLDZCQUFBRixPQUFPLENBQUNFLElBQUksa0NBQUlGLE9BQU8sQ0FBQ0csS0FBSztRQUNuQ0MsS0FBSyxFQUFFSixPQUFPLENBQUNJLEtBQUs7UUFDcEJDLEtBQUssRUFBRUwsT0FBTyxDQUFDTSxVQUFVO1FBQ3pCaEIsUUFBUSxFQUFFLEtBQUssQ0FBRTtNQUNuQixDQUFDO0lBQ0g7RUFDRixDQUFDLENBQUM7QUFFTixDQUFDOztBQUNELGVBQWVYLFFBQVEsQ0FBQ0ksV0FBVyxDQUFDIn0=