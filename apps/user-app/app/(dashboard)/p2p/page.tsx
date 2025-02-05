"use client";
import DisplayError from "@repo/ui/display-error";
import InputBox from "@repo/ui/inputbox";
import Label from "@repo/ui/label";
import React, { useState } from "react";
import p2pTransfer from "../../lib/actions/p2pTransfer";

const P2P = () => {
  const [formData, setFormData] = useState({
    email: "",
    amount: "",
  });
  const [error, setError] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData", formData);
    try {
      const response = await p2pTransfer({
        email: formData.email,
        amount: formData.amount,
      });
      if (response.status === true) {
        alert("all good");
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError("An error occured");
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
          <Label name="Email" />
          <InputBox
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="peer@gmail.com"
          />
          <br />
          <Label name="Amount" />
          <InputBox
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="100"
          />
          <br />
        </div>
        {error && <DisplayError errorMessage={error} />}
        <button
          type="submit"
          className="w-full text-gray-900 border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
        >
          Transfer
        </button>
      </form>
    </div>
  );
};

export default P2P;
