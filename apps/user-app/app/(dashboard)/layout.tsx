import React from "react";
import Sidebar from "@repo/ui/side-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex"> 
        <div className="w-1/7"> 
          <Sidebar />
        </div>
        <div className="w-6/7">
          {children}
        </div>
      </main>
    </>
  );
}
