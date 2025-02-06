"use server";
import { prisma } from "@repo/db";
import { getUserId } from "./userDetails";

type p2pTransferProps = {
  email: string;
  amount: string;
};

const p2pTransfer = async ({ email, amount }: p2pTransferProps) => {
  const fromUserId = await getUserId();

  if (!fromUserId) {
    return {
      status: false,
      message: "User not authenticated",
    };
  }
  // Find recipient user
  const toUser = await prisma.user.findFirst({
    where: { email },
  });
  if (!toUser) {
    return {
      status: false,
      message: "Recipient not found",
    };
  }

  // Convert amount to number and validate
  const transferAmount = Number(amount);
  if (isNaN(transferAmount) || transferAmount <= 0) {
    return {
      status: false,
      message: "Invalid amount",
    };
  }

  try {
    await prisma.$transaction(async (tx) => {
      // Get sender's balance
      const fromBalance = await tx.balance.findFirst({
        where: { userId: Number(fromUserId) },
      });

      if (!fromBalance || fromBalance.amount < transferAmount) {
        throw new Error("Insufficient funds");
      }

      // Get recipient's balance
      const toBalance = await tx.balance.findFirst({
        where: { userId: toUser.id },
      });

      if (!toBalance) {
        throw new Error("Recipient balance not found");
      }

      // Update balances
      await tx.balance.update({
        where: { id: fromBalance.id },
        data: { amount: { decrement: transferAmount } },
      });

      await tx.balance.update({
        where: { id: toBalance.id },
        data: { amount: { increment: transferAmount } },
      });

      // Create transfer record
      await tx.p2pTransfer.create({
        data: {
          amount: transferAmount,
          timestamp: new Date(),
          fromUserId: Number(fromUserId),
          toUserId: toUser.id,
        },
      });
    });

    return {
      status: true,
      message: "Transfer successful",
    };
  } catch (error) {
    return {
      status: false,
      message: error instanceof Error ? error.message : "Transfer failed",
    };
  }
};

export default p2pTransfer;
