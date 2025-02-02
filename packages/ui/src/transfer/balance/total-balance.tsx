import React from "react";
import DisplayBalance from "./display-balance";
const TotalBalance: React.FC = () => {
  return (
    <div
      className="h-1/3 m-5 space-y-4 border rounded p-6 border-gray-700 bg-gray-800 overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    >
      <div className="text-white text-4xl pb-4 border-b border-gray-700">
        Balance
      </div>

      <DisplayBalance title="Unlocked Balance" amount={600} />
      <DisplayBalance title="Locked Balance" amount={0} />
      <DisplayBalance title="Total Balance" amount={600} />
    </div>
  );
};

export default TotalBalance;
