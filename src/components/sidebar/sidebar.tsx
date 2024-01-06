"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SidebarItem from "./sidebarItem";
import { sidebarList } from "@/constants";
import { usePathname } from "next/navigation";
import { text } from "stream/consumers";
import classNames from "classnames";
import useWindowSize from "@/hooks/useWindowSize";

const Sidebar = () => {
  const pathname = usePathname();
  const size = useWindowSize();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-2 mt-2">
        <button
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          className="inline-flex items-center ms-3 text-sm z-[11111] text-gray-500 relative rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
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
        <Image
          src={"/logo-wt.png"}
          width={100}
          height={100}
          alt="movie wala"
          className="block sm:hidden"
        />
      </div>

      <aside
        id="sidebar-multi-level-sidebar"
        className={classNames(
          "sm:fixed absolute top-0 left-0 z-[1111] w-[250px] h-screen transition-transform bg-darkBackground sm:bg-transparent",
          {
            "sm:translate-x-full": mobileSidebarOpen && size.width < 767,
            "-translate-x-full": !mobileSidebarOpen,
            "translate-x-0": size.width > 639,
          }
        )}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <Image
            src={"/logo-wt.png"}
            width={100}
            height={100}
            alt="movie wala"
            className="mx-auto sm:block hidden"
          />

          <ul className="space-y-2 py-5 font-medium sm:mt-0 mt-10">
            {sidebarList?.map((item, index) => {
              const { icon, text, href } = item;
              return (
                <li key={index}>
                  <SidebarItem
                    Icon={icon}
                    text={text}
                    href={href}
                    isActive={href === pathname}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
