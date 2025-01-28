import React from "react";
type LabelProps = {
  name: string;
};
const Label: React.FC<LabelProps> = ({ name }) => {
  return (
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {name}
    </label>
  );
};

export default Label
