import type { Metadata } from "next";
import "./globals.css";


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
      <body className="bg-darkBackground text-darkText min-h-screen justify-between no-scrollbar">
        {children}
      </body>
    </html>
  );
}
