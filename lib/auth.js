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
    async jwt({ token, user }) {
      if (user) {
        return { ...token, userStatus: user.status };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          userStatus: token.userStatus,
        },
      };
    },
  },
};
