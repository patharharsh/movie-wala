import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import classNames from 'classnames';

interface SidebarItemProps extends LinkProps {
    Icon: React.ElementType,
    text: string,
    isActive: boolean
}

const SidebarItem = ({Icon, text, isActive,  ...props}: SidebarItemProps) => {
    
  return (
    <Link
      href={props.href}
      className={ classNames("flex items-center px-3 py-4 group hover:text-[#4ECCA3] hover:bg-darkBackground border-l-4 border-transparent rounded-xl hover:border-[#4ECCA3]", {"!border-[#4ECCA3] text-[#4ECCA3] border-l-4  bg-darkBackground": isActive})}
    >
     <Icon />
      <span className="ms-3">{text}</span>
    </Link>
  );
};

export default SidebarItem;
