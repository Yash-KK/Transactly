import React from "react";
import Sidebar from "@repo/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="ml-64">
        {children}
        </div>
        
      </main>
    </>
  );
}
