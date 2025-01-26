import React from "react";
import { prisma } from "@repo/db";

export default async function Page() {
  const data = await prisma.user.findFirst();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Setup Prisma successfully
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Username: {data?.name}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Email: {data?.email}
      </p>

    </a>
    </div>
  );
}
