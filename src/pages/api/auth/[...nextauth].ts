import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/authcon/mongodb";

export const authOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({session, user}) {
      session.user.id = user.id;
      return session;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      allowDangerousEmailAccountLinking: true, // Fixes oauth bug

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name ?? profile.login,
          email: profile.email,
          image: profile.avatar_url,
          isAgency: false, // Set agency (admin) to false by default
        };
      },
    }),
  ],
};
export default NextAuth(authOptions);