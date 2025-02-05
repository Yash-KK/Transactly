import React from "react";
type DisplayTransactionsProps = {
  title: string;
  onRampstatus: string;
  date: Date;
  amount: number;
};
const DisplayTransactions: React.FC<DisplayTransactionsProps> = ({
  title,
  onRampstatus,
  date,
  amount,
}) => {
  return (
    <div className="flex justify-between border-gray-700">
      <div className="font-normal mt-5 font-mono text-2xl text-gray-400">
        {title} <span className={`text-sm ${onRampstatus === 'Success' ? 'text-green-500' : onRampstatus === 'Failure' ? 'text-red' : 'text-gray-400'}`}>({onRampstatus})</span>
        <span className="text-xs mt-1 block">{String(date)}</span>
      </div>
      <p className="text-2xl font-medium text-gray-900 mt-5 text-white">
        +INR {amount}
      </p>
    </div>
  );
};
export default DisplayTransactions;
