import React from "react";

type AuthLabelProps = {
  label: string;
};
const AuthLabel: React.FC<AuthLabelProps> = ({ label }) => {
  return (
    <p className="flex items-center mb-6 text-2xl font-semibold text-white">
      <img
        className="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo"
      />
      {label}
    </p>
  );
};
export default AuthLabel;
