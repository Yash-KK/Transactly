import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppBar from "@repo/ui/app-bar";
import { getServerSession } from "next-auth";
import { SessionProvider } from "./providers/SessionProvider";
import ToastProvider from "@repo/ui/toast-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transactly",
  description: "Generated by create turbo",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ToastProvider>
            <AppBar />
            {children}
          </ToastProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
