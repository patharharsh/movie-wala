import Navbar from "@/components/navbar/navbar";
import '../../globals.css'
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Navbar isDetailPage={true} />
      {children}
    </div>
  );
};

export default Layout;
