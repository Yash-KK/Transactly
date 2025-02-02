import React from "react";
type DisplayBalanceProps = {
    title: string,
    amount: number
}
const DisplayBalance: React.FC<DisplayBalanceProps> = ({title, amount}) => {
  return (
    <div className="flex justify-between border-gray-700">
      <p className="font-normal mt-5 font-mono text-2xl text-gray-400">
        {title}
      </p>
      <p className="text-2xl font-medium text-gray-900 mt-5 text-white">
        INR {amount}
      </p>
    </div>
  );
};
export default DisplayBalance;
