"use client";

import React, { useState } from "react";
import { signupAction } from "../lib/actions/auth";
import { useRouter } from "next/navigation";
import Button from "@repo/ui/button";
import Label from "@repo/ui/label";
import InputBox from "@repo/ui/inputbox";
import AuthLabel from "@repo/ui/auth-label";
import AuthRedirect from "@repo/ui/auth-redirect";
import AuthFormLayout from "@repo/ui/auth-form-layout";
import DisplayError from "@repo/ui/display-error";

const SignUp: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { firstName, email, password } = formData;

    if (!firstName || !email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const result = await signupAction(firstName, email, password);

      if (result.success) {
        router.push("/signin");
      } else {
        setError(result.message || "Signup failed");
      }
    } catch (error) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[calc(100vh-64px)] bg-gray-900 lg:py-0">
      <AuthLabel label="Sign Up" />
      <AuthFormLayout handleSubmit={handleSubmit}>
        <Label name="First Name" />
        <InputBox
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />

        <Label name="Email" />
        <InputBox
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <Label name="Password" />
        <InputBox
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        {error && <DisplayError errorMessage={error} />}
        <Button signup={true} loading={loading} />
        <AuthRedirect signIn={false} />
      </AuthFormLayout>
    </div>
  );
};

export default SignUp;
