"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@repo/ui/button";
import Label from "@repo/ui/label";
import InputBox from "@repo/ui/inputbox";
import AuthLabel from "@repo/ui/auth-label";
import AuthRedirect from "@repo/ui/auth-redirect";
import AuthFormLayout from "@repo/ui/auth-form-layout";
import GithubButton from "@repo/ui/github-button";
import DisplayError from "@repo/ui/display-error";
import { signIn } from "next-auth/react";

const SignIn: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
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

  const handleGithubSignin = async () => {
    await signIn("github", { callbackUrl: "/home" });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { email, password } = formData;
    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/home");
      }
    } catch (error) {
      setError("An error occurred during sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col  bg-gray-900 items-center justify-center px-6 py-8 mx-auto h-[calc(100vh-64px)] lg:py-0">
      <AuthLabel label="Sign In" />
      <AuthFormLayout handleSubmit={handleSubmit}>
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
        <Button signup={false} loading={loading} />
        <GithubButton handleOnClick={handleGithubSignin} />
        <AuthRedirect signIn={true} />
      </AuthFormLayout>
    </div>
  );
};

export default SignIn;
