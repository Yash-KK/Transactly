import React from "react";

const RecentTransactions: React.FC = () => {
  return (
    <div className="h-2/3 m-5 space-y-4 border rounded p-6 border-gray-700 bg-gray-800">
    <div className="text-white text-4xl pb-2 border-b border-gray-700">Recent Transactions</div>
    <div className="flex justify-center items-center flex-col">
    <div className="text-2xl bg-gray-500 text-white">
        No Recent Transactions
    </div>
    </div>
  </div>
  )
};

export default RecentTransactions;
