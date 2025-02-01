import React from "react";
import AddMoney from "@repo/ui/add-money";
import TotalBalance from "@repo/ui/total-balance";
import RecentTransactions from "@repo/ui/recent-transactions";

const Transfer = () => {
  return (
    <div className="grid grid-cols-2">
      <AddMoney />
      <div className="flex flex-col bg-slate-200">
        <TotalBalance />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Transfer;
