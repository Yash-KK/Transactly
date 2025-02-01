"use client"
import React from "react";

const AddMoney: React.FC = () => {
    
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        alert("hello world");
    }
    return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center flex-col bg-slate-200">
      <h2 className="font-mono mb-6 text-6xl font-semibold">Transfer</h2>
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
              className="block w-full mb-5 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  focus:ring-primary-500 border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
              defaultValue=""
              required
            >
              <option value="" disabled>Select your bank</option>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
              <option value="bank3">Bank 3</option>
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
