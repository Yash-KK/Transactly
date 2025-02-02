import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "@repo/db";
import { compare } from "bcryptjs";

export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Please enter an email and password");
          }
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (!user) {
            throw new Error("User with email does not exist!");
          }
          const correctPassword = await compare(
            credentials.password,
            user.password
          );
          if (!correctPassword) {
            throw new Error("In-correct password");
          }
          return {
            id: `${user.id}`,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          };
        },
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string
      })
    ],
    pages: {
      signIn: "/signin",
    },
  };