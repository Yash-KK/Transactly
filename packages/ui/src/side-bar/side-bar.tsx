import React from "react";
import HomeIcon from "../icons/home-icon";
import SideBarItem from "./side-bar-item";
import TransferIcon from "../icons/transfer-icon";
import TransactionsIcon from "../icons/transactions-icon";
import P2PIcon from "../icons/p2p-icon";

const SideBar: React.FC = () => {
  return (
    <div className="h-[calc(100vh-64px)] px-3 py-4 bg-gray-800">
      <SideBarItem title="Home" to="home" icon={<HomeIcon />} />
      <SideBarItem title="Transfer" to="transfer" icon={<TransferIcon />} />
      <SideBarItem title="Transactions" to="transactions" icon={<TransactionsIcon />} />
      <SideBarItem title="P2P-Transfer" to="p2p" icon={<P2PIcon />} />
    </div>
  );
};

export default SideBar;
