function cov_ywjm9nlpk() {
  var path = "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\hooks\\useCloudinary.ts";
  var hash = "fdd48084e8456c31f5f91dd6ba5a7369901ebc5f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Sophia\\Desktop\\industrial\\cypressupdated\\src\\hooks\\useCloudinary.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 16
        },
        end: {
          line: 8,
          column: 4
        }
      },
      "1": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 29
        }
      }
    },
    fnMap: {
      "0": {
        name: "useCloudinary",
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 37
          }
        },
        loc: {
          start: {
            line: 3,
            column: 40
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fdd48084e8456c31f5f91dd6ba5a7369901ebc5f"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ywjm9nlpk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_ywjm9nlpk();
import { Cloudinary } from "@cloudinary/url-gen";
export default function useCloudinary() {
  cov_ywjm9nlpk().f[0]++;
  const cloud = (cov_ywjm9nlpk().s[0]++, new Cloudinary({
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    }
  }));
  cov_ywjm9nlpk().s[1]++;
  return {
    Cloudinary: cloud
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDbG91ZGluYXJ5IiwidXNlQ2xvdWRpbmFyeSIsImNsb3VkIiwiY2xvdWROYW1lIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMT1VESU5BUllfQ0xPVURfTkFNRSJdLCJzb3VyY2VzIjpbInVzZUNsb3VkaW5hcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDbG91ZGluYXJ5fSBmcm9tIFwiQGNsb3VkaW5hcnkvdXJsLWdlblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2xvdWRpbmFyeSgpIHtcclxuICBjb25zdCBjbG91ZCA9IG5ldyBDbG91ZGluYXJ5KHtcclxuICAgIGNsb3VkOiB7XHJcbiAgICAgIGNsb3VkTmFtZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xPVURJTkFSWV9DTE9VRF9OQU1FLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtDbG91ZGluYXJ5OiBjbG91ZH07XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLFNBQVFBLFVBQVUsUUFBTyxxQkFBcUI7QUFFOUMsZUFBZSxTQUFTQyxhQUFhLEdBQUc7RUFBQTtFQUN0QyxNQUFNQyxLQUFLLDRCQUFHLElBQUlGLFVBQVUsQ0FBQztJQUMzQkUsS0FBSyxFQUFFO01BQ0xDLFNBQVMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDO0lBQ3pCO0VBQ0YsQ0FBQyxDQUFDO0VBQUM7RUFFSCxPQUFPO0lBQUNOLFVBQVUsRUFBRUU7RUFBSyxDQUFDO0FBQzVCIn0=