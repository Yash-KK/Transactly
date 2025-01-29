"use client";
import { useSession } from "next-auth/react";
import React from "react";
export default function Page() {
  const session = useSession();

  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-64px)] bg-gray-900">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {session.status === "authenticated"
              ? "You are authenticated"
              : "You are not authenticated"}
          </h5>
          {session.status === "authenticated" && (
            <>
              <p className="font-normal text-gray-700">
                Email: {session.data.user?.email}
              </p>
            </>
          )}
        </a>
      </div>
    </>
  );
}
