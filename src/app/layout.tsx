import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Wala",
  description: "Bar Bar Dekho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-darkBackground text-darkText min-h-screen">
        <div className="flex">
          <div className="w-[300px]">
            <Sidebar />
          </div>
          <div className="w-full">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
