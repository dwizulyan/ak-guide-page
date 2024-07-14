import React from "react";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavLinkItem from "@/components/navbar/NavLink";

const NavItems: React.FC<{
  containerPosition: string;
  handleNavbar: () => void;
}> = ({ containerPosition, handleNavbar }) => {
  return (
    <>
      <div>
        <FontAwesomeIcon
          onClick={() => handleNavbar()}
          icon={faBars}
          className="text-xl text-blue-400"
        />
      </div>
      <div
        className={twMerge(
          "z-[-9] w-full h-screen dark:bg-neutral-900 bg-neutral-100 fixed top-0 transition-all",
          containerPosition,
          "flex px-5 py-20 flex-col gap-5"
        )}
      >
        <NavLinkItem onclick={handleNavbar} url={"/"} title={"Home"} />
        <NavLinkItem
          title={"Stage Guide"}
          url={"/guide/stages"}
          onclick={handleNavbar}
        />
      </div>
    </>
  );
};
export default NavItems;
