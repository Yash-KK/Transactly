import React from "react";
type DisplayTransactionsProps = {
  title: string;
  date: string;
  amount: number;
};
const DisplayTransactions: React.FC<DisplayTransactionsProps> = ({
  title,
  date,
  amount,
}) => {
  return (
    <div className="flex justify-between border-gray-700">
      <p className="font-normal mt-5 font-mono text-2xl text-gray-400">
        {title}
        <div className="text-xs">{date}</div>
      </p>
      <p className="text-2xl font-medium text-gray-900 mt-5 text-white">
        +INR {amount}
      </p>
    </div>
  );
};
export default DisplayTransactions;
