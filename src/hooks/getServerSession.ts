import {getServerSession as nextServerAuthSession} from "next-auth";

// eslint-disable-next-line camelcase
export const getServerSession = (req, res, authOptions) : any => {
  if (process.env.NODE_ENV == "test" || process.env.NEXT_PUBLIC_TEST) {
    return {
      user: {
        name: "TestBot",
        email: "TestBot@<web>.com",
        image: "https://avatars.githubusercontent.com/u/27347476?s=200&v=4",
        id: "00000020f51bb4362eee2a4d",
      },
      expires: "",
    };
  }

  return nextServerAuthSession(req, res, authOptions); // Operate as normal
};


