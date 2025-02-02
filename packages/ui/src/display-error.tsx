import React from "react";

type DisplayErrorProps = {
  errorMessage: string;
};
const DisplayError: React.FC<DisplayErrorProps> = ({ errorMessage }) => {
  return (
    <>
      <div className="text-red-500">{errorMessage}</div>
    </>
  );
};

export default DisplayError;
