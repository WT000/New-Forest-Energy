import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/authcon/mongodb";

export const authOptions = {
  pages: {
    signIn: '/auth/signin'
  },
  callbacks: {
    async session({session, user}) {
      // Update the session.user with new fields here, which need to be their database id and isAgency status
      session.user.id = user.id;
      session.user.isAgency = user.isAgency;
      return session;
    },
  },
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
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