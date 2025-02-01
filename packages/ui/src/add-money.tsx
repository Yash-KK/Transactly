"use client";
import React, { useState } from "react";

const AddMoney: React.FC = () => {
  const [formData, setFormData] = useState({
    amount: "",
    selectedBank: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Amount:", formData.amount);
    console.log("Selected Bank:", formData.selectedBank);
    alert("hello world");
  };
  return (
    <div className="min-h-[50vh] lg:h-[calc(100vh-64px)] flex justify-center items-center flex-col bg-slate-200 p-4">
      <h2 className="font-mono mb-6 text-4xl lg:text-6xl font-semibold">Transfer</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-lg border border-gray-200 border-gray-700 dark:bg-gray-800 max-w-xl lg:p-8"
      >
        <div className="flex flex-col">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 text-white">
              Amount
            </label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="block w-full mb-5 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder="100"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Bank
            </label>
            <select
              name="selectedBank"
              value={formData.selectedBank}
              onChange={handleInputChange}
              className="block w-full mb-5 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:ring-primary-500 border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
              required
            >
              <option value="" disabled>
                Select your bank
              </option>
              <option value="HDFC">HDFC</option>
              <option value="AXIS">AXIS</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-gray-900 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};
export default AddMoney;
