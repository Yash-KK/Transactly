import React from "react";
type InputBoxType = {
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};
const InputBox: React.FC<InputBoxType> = ({ name, type, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    />
  );
};

export default InputBox;
