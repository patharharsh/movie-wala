import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";


export const sidebarList: { icon: React.ElementType; text: string; href: string }[] = [
  {
    icon: IoHomeSharp,
    text: "Home",
    href: "/",
  },
  {
    icon: MdOutlineTravelExplore,
    text: "Explore",
    href: "/explore",
  },
  {
    icon: HiUserGroup,
    text: "Community",
    href: "/community",
  },
];
