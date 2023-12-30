import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import IconButton from "../button/iconButton";
import SearchBar from "../searchBar/searchBar";
import NotificationBox from "../notificationBox/notificationBox";

const Navbar = () => {
  return (
    <div className="flex gap-5 justify-end focus:border-0 p-5">
        <SearchBar />
        <NotificationBox />
      <IconButton>
        <FaBookmark />
      </IconButton>
    </div>
  );
};

export default Navbar;
