"use server";

import { prisma } from "@repo/db";
import { getUserId } from "./userDetails";

function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
}
type CreateOnRampTransactionProps = {
  amount: string;
  provider: string;
};

const createOnRampTransaction = async ({
  amount,
  provider,
}: CreateOnRampTransactionProps) => {
  const userId = await getUserId();
  const token = generateRandomString(10)
  try {
    await prisma.onRampTransaction.create({
      data: {
        amount: Number(amount),
        provider: provider,
        status: "Processing",
        token: token,
        userId: userId,
      },
    });
    return {
      status: true,
    };
  } catch (error) {
    return {
      status: false,
      message: "failed to process transactions",
    };
  }
};

export default createOnRampTransaction;
