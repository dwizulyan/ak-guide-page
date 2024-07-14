import React from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
const NavLinkItem: React.FC<{
  url: string;
  title: string;
  onclick: () => void;
}> = ({ url, onclick, title }) => {
  const basicClasses =
    "text-lg font-medium w-full relative transition-all after:w-[0px] after:transition-all";
  const afterClasses =
    "after:content-[''] after:w-full after:h-[2px] after:bg-blue-400 after:block after:absolute after:left-0";
  return (
    <NavLink
      to={url}
      onClick={onclick}
      className={({ isActive }) =>
        isActive
          ? twMerge(basicClasses, "text-blue-400", afterClasses)
          : twMerge(basicClasses, "dark:text-white")
      }
    >
      {title}
    </NavLink>
  );
};
export default NavLinkItem;
