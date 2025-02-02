import React from "react";
import DisplayTransactions from "./display-transactions";

type Transaction = {
  startTime: Date;
  amount: number;
};

type RecentTransactionsProps = {
  transactions: Transaction[];
};
const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => {
  return (
    <div
      className="h-2/3 m-5 space-y-4 border rounded p-6 border-gray-700 bg-gray-800 overflow-y-auto max-h-150 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <div className="text-white text-4xl pb-2 border-b border-gray-700">
        Recent Transactions
      </div>

      {transactions.length === 0 ? (
        <>
          <div className="flex justify-center items-center flex-col">
            <div className="text-2xl text-white">No Recent Transactions</div>
          </div>
        </>
      ) : (
        <>
         {transactions.map((transaction, index) => (
            <DisplayTransactions
              key={index}
              title="Received"
              date={transaction.startTime}
              amount={transaction.amount}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default RecentTransactions;
