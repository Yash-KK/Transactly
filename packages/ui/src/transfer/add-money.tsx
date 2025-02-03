"use client";
import React, { useState } from "react";
import Label from "../label";
import InputBox from "../inputbox";
import { useRouter } from "next/navigation";
import { useToast } from "../toast-context";

type AddMoneyProps = {
  createOnRampTransaction: any;
};
const AddMoney: React.FC<AddMoneyProps> = ({ createOnRampTransaction }) => {
  const router = useRouter();
  const toast = useToast();
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Amount:", formData.amount);
    console.log("Selected Bank:", formData.selectedBank);

    const response = await createOnRampTransaction({
      amount: formData.amount,
      provider: formData.selectedBank,
    });
    if (response.status) {
      if (toast) {
        toast.success(
          "Your transaction is being processed. Please note that during development, you'll need to simulate the bank server by manually hitting the Postman endpoint."
        );
      }
      setFormData({ amount: "", selectedBank: "" });
      router.refresh();
    } else {
      alert(response.message);
    }
  };
  return (
    <div className="min-h-[50vh] lg:h-[calc(100vh-64px)] flex justify-center items-center flex-col bg-slate-200 p-4">
      <h2 className="font-mono mb-6 text-4xl lg:text-6xl font-semibold">
        Transfer
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-lg border border-gray-200 border-gray-700 dark:bg-gray-800 max-w-xl lg:p-8"
      >
        <div className="flex flex-col">
          <Label name="Amount" />
          <InputBox
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="100"
          />
          <br />
          <Label name="Bank" />
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

        <button
          type="submit"
          className="w-full text-gray-900 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
        >
          Add Money
        </button>
      </form>
    </div>
  );
};
export default AddMoney;
