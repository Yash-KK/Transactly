import React from "react";

type AuthFormLayoutProps = {
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent) => void;
};
const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({
  children,
  handleSubmit,
}) => {
  return (
    <>
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            {children}
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthFormLayout;
