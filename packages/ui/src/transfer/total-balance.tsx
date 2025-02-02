import React from "react";

const TotalBalance: React.FC = () => {
  return (
    <div className="h-1/3 m-5 space-y-4 border rounded p-6 border-gray-700 bg-gray-800">
      <div className="text-white text-4xl pb-4 border-b border-gray-700">Balance</div>

      <div className="flex justify-between border-gray-700">
        <p className="font-normal mt-5 font-mono text-2xl text-gray-400 border-gray-700">
          Unlocked Balance
        </p>
        <p className="text-2xl font-medium text-gray-900 mt-5 text-white">
          INR 6,592.00
        </p>
      </div>

      <div className="flex justify-between border-t border-gray-700">
        <p className="text-2xl font-mono mt-5 text-gray-400">
          Locked Balance
        </p>
        <p className="text-2xl font-medium mt-5 text-white">INR 299.00</p>
      </div>

      <div className="flex justify-between gap-4 border-t border-gray-700">
        <p className="text-2xl font-normal mt-5 text-gray-400 ">Total Balance</p>
        <p className="text-2xl font-medium mt-5 text-gray-900 text-green-500">
        INR 99
        </p>
      </div>
    </div>
  );
};

export default TotalBalance;
