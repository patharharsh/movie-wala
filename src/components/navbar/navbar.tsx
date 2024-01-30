import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import IconButton from "../button/iconButton";
import SearchBar from "../searchBar/searchBar";
import NotificationBox from "../notificationBox/notificationBox";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ isDetailPage = false }: { isDetailPage?: boolean }) => {
  return (
    <div className="flex justify-between items-center">
      {isDetailPage && <Link href={"/"} className="mx-5 w-full">
        <Image
          src={"/logo-wt.png"}
          width={100}
          height={100}
          alt="movie wala"
        />
      </Link>}
      <div className="flex w-full gap-5 justify-end focus:border-0 p-5">
        <SearchBar />
        <NotificationBox />
        <IconButton>
          <FaBookmark />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
