import React, { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import NavItems from "@/components/NavItems";

const Navbar: React.FC = () => {
  const [containerPosition, setContainerPosition] =
    useState<string>("left-[-100%]");
  const [navbarState, setNavbarState] = useState<boolean>(false);
  function handleNavbar() {
    if (navbarState) {
      setContainerPosition("left-[-100%]");
      setNavbarState(false);
    } else {
      setContainerPosition("left-0");
      setNavbarState(true);
    }
  }
  return (
    <div className="w-full h-16 dark:bg-neutral-900 flex justify-between items-center px-5 bg-neutral-100 isolate fixed top-0 left-0 z-[9999]">
      <NavItems
        containerPosition={containerPosition}
        handleNavbar={handleNavbar}
      />
      <ThemeToggle />
    </div>
  );
};
export default Navbar;
