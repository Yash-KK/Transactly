import React from "react";
import AddMoney from "@repo/ui/add-money";
import TotalBalance from "@repo/ui/total-balance";
import RecentTransactions from "@repo/ui/recent-transactions";
import { prisma } from "@repo/db";
import { getUserId } from "../../lib/actions/userDetails";
import createOnRampTransaction from "../../lib/actions/createOnRampTransactions";

const getOnRampTransactions = async () => {
  const userId = await getUserId();
  const transactions = await prisma.onRampTransaction.findMany({
    where: {
      userId: userId,
    },
    select: {
      amount: true,
      startTime: true,
      status: true,
    },
  });

  return transactions;
};

const getUserBalance = async () => {
  const userId = await getUserId();
  const balance = await prisma.balance.findFirst({
    where: {
      userId: userId,
    },
    select: {
      amount: true,
      locked: true,
    },
  });

  return balance;
};
const Transfer = async () => {
  const transactions = await getOnRampTransactions();
  const balance = await getUserBalance();
  return (
    <div className="grid grid-cols-2">
      <AddMoney createOnRampTransaction={createOnRampTransaction} />
      <div className="flex flex-col bg-slate-200">
        {balance && (
          <TotalBalance amount={balance.amount} locked={balance.locked} />
        )}
        <RecentTransactions transactions={transactions} />
      </div>
    </div>
  );
};

export default Transfer;
