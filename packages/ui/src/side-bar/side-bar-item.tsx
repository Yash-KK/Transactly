import React from "react";
import Link from "next/link";

type SideBarItemProps = {
  title: string;
  to: string;
  icon: React.ReactNode;
};
const SideBarItem: React.FC<SideBarItemProps> = ({ title, icon, to }) => {
  return (
    <Link
      href={to}
      className="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700 group"
    >
      {icon}
      <span className="ms-3 font-medium">{title}</span>
    </Link>
  );
};
export default SideBarItem;
