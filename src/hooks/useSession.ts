import {useSession as nextAuthSession} from "next-auth/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useSession = () : any => {
  if (
    process.env.NODE_ENV == "test" ||
    process.env.NEXT_PUBLIC_TEST ||
    process.env.STORYBOOK_TEST
  ) {
    return {
      data: {
        user: {
          name: "TestBot",
          email: "TestBot@<web>.com",
          image: "https://avatars.githubusercontent.com/u/27347476?s=200&v=4",
          id: "00000020f51bb4362eee2a4d",
          isAgency: true
        },
        expires: "",
      },
    };
  }

  return nextAuthSession(); // Operate as normal
};