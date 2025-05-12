import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = { id: "1", email: "shivam@gmail.com", password: "shivam" };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return { id: user.id, email: user.email };
        }else{
            console.log("Invalid credentials");
            return null;
        } 
      }
    })
  ],
  pages: {
    signIn: "/login" 
  },
  session: {
    strategy: "jwt" 
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.email = user.email;
      return token;
    },
    async session({ session, token }) {
      if (token?.email) {
        session.user = {
          email: token.email
        };
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
