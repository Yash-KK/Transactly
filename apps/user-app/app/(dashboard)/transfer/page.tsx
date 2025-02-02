import React from "react";
import AddMoney from "@repo/ui/add-money";
import TotalBalance from "@repo/ui/total-balance";
import RecentTransactions from "@repo/ui/recent-transactions";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { prisma } from "@repo/db";

const getUserId = async () => {
  const session = await getServerSession(authOptions);
  return session.user.id;
};
const getOnRampTransactions = async () => {
  const userId = await getUserId();
  const transactions = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(userId),
    },
    select: {
      amount: true,
      startTime: true,
    },
  });

  return transactions;
};
const Transfer = async () => {
  const transactions = await getOnRampTransactions();
  return (
    <div className="grid grid-cols-2">
      <AddMoney />
      <div className="flex flex-col bg-slate-200">
        <TotalBalance />
        <RecentTransactions transactions={transactions} />
      </div>
    </div>
  );
};

export default Transfer;
