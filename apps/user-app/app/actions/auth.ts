'use server'
import { prisma } from "@repo/db";
import { z } from "zod";


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
  const validatedContactFormData = SignUpSchema.safeParse({
    firstName,
    email,
    password
  });
  console.log('validatedContactFormData: ', validatedContactFormData)
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      return { success: false, message: 'Email already exists' };
    }

    console.log(firstName,  email, password)

    return { success: true, user: 'new-user' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'An error occurred while signing up' };
  }
}
