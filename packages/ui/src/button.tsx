import React from "react";
type ButtonProps = {
  loading: boolean;
  signup: boolean
};
const Button: React.FC<ButtonProps> = ({ loading, signup }) => {
  return (
    <button
      type="submit"
      className="w-full text-white border focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5"
      disabled={loading}
    >
      { signup ? (loading ? "Signing Up..." : "Create an account") : (loading ? "Signing In..." : "Sign In") }
    </button>
  );
};
export default Button;
