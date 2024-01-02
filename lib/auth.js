import prisma from "./prisma";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { LoginAction } from "../src/app/Actions/LoginAction";
import CredentialsProvider from "next-auth/providers/credentials";

// import { NextAuthOptions } from "next-auth"; // export const authOptions: NextAuthOptions =

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 36000, //in seconds = 10 hours
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await LoginAction(credentials);
        console.log(res);
        // If no error and we have user data, return it

        if (res.user) {
          return res.user;
        }
        if (res.message) {
          return null;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/Login",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        // return { ...token, userStatus: user.status };
        token.status = user.status;
        token.role = user.role;
        token.companyID = user.companyID;
      }
      if (trigger === "update" && session?.newStatus) {
        token.status = session.newStatus;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.status = token.status;
        session.user.role = token.role;
        session.user.companyID = token.companyID;
      }
      return session;
      // return {
      //   ...session,
      //   user: {
      //     ...session.user,
      //     userStatus: token.userStatus,
      //   },
      // };
    },
  },
};
