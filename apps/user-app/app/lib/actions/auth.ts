"use server";
import { prisma } from "@repo/db";
import { z } from "zod";
import bcrypt from "bcryptjs";

const SignUpSchema = z.object({
  firstName: z.string().trim().min(1, { message: "Name field is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().trim().min(4),
});
export async function signupAction(
  firstName: string,
  email: string,
  password: string
) {
  const validatedSignUpData = SignUpSchema.safeParse({
    firstName,
    email,
    password,
  });

  if (!validatedSignUpData.success) {
    return { success: false, message: "Invalid user input" };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { success: false, message: "Email already exists" };
    }
    const hashedPassword = await bcrypt.hash(
      validatedSignUpData.data!.password,
      10
    );

    try {
      const newUser = await prisma.user.create({
        data: {
          firstName: validatedSignUpData.data!.firstName,
          email: validatedSignUpData.data!.email,
          password: hashedPassword,
        },
      });

      await prisma.balance.create({
        data: {
          userId: newUser.id,
        },
      });
    } catch (error) {
      return { success: false, message: "failed to create new user" };
    }

    return { success: true, message: "New user created" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "An error occurred while signing up" };
  }
}
