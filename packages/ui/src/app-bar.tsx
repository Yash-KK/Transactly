"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AppBar() {
  const session = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/signin");
  };

  const handleRedirection = () => {
    if (session.status === "authenticated") {
      router.push("/dashboard");
    } else {
      router.push("/signin");
    }
  };
  return (
    <div className="flex items-center justify-around bg-gray-900 p-4">
      <button onClick={handleRedirection} className="flex space-x-3 cursor-pointer">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className="text-2xl font-semibold text-white">Transactly</span>
      </button>

        {session.status === "authenticated" ? (
          <>
            <button
              onClick={handleSignOut}
              className="block py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                router.push("/signup");
              }}
              className="block py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                router.push("/signin");
              }}
              className="block py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0"
            >
              Sign In
            </button>
          </>
        )}
    </div>
  );
}
