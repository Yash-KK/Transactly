import React from "react";
type ButtonProps = {
  loading: boolean;
};
const Button: React.FC<ButtonProps> = ({ loading }) => {
  return (
    <button
      type="submit"
      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 focus:ring-primary-800"
      disabled={loading}
    >
      {loading ? "Signing Up..." : "Create an account"}
    </button>
  );
};
export default Button;
