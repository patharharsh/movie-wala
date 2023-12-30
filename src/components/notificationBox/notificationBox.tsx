"use client";
import React, { useState } from "react";
import IconButton from "../button/iconButton";
import { IoIosNotifications } from "react-icons/io";

const NotificationBox = () => {

   const [showBox, setShowBox] = useState(false)

  return (
    <div className="relative">
      <IconButton onClick={() => setShowBox(!showBox)}>
        <IoIosNotifications />
      </IconButton>
      {showBox && <div className="bg-darkBackground absolute right-0 rounded-lg px-5 py-3 w-[250px] top-[121%] text-center shadow-lg">
        No Notifications
      </div> }
    </div>
  );
};

export default NotificationBox;
