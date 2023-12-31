"use client";
import Image from "next/image";
import React from "react";
import SidebarItem from "./sidebarItem";
import { sidebarList } from "@/constants";
import { usePathname } from "next/navigation";

const Sidebar = () => {


  const pathname = usePathname()
  
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden  focus:outline-none "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-[250px] h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <Image
            src={"/logo-wt.png"}
            width={100}
            height={100}
            alt="movie wala"
            className="mx-auto"
          />

          <ul className="space-y-2 py-5 font-medium">
            {sidebarList?.map((item, index) => (
              <li key={index}>
                <SidebarItem
                  icon={<item.icon />}
                  text={item.text}
                  href={item.href}
                  isActive={item.href === pathname}
                />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
