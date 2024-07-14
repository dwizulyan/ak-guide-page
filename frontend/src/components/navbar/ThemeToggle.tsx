import React from "react";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle: React.FC = () => {
  const isDark = localStorage.getItem("theme");
  function handleTheme() {
    console.log("changing theme ...");
    if (isDark === "dark") {
      localStorage.setItem("theme", "");
      location.reload();
    } else {
      localStorage.setItem("theme", "dark");
      location.reload();
    }
  }

  return (
    <div>
      {isDark ? (
        <FontAwesomeIcon
          icon={faMoon}
          className="text-xl text-blue-400"
          onClick={() => handleTheme()}
        />
      ) : (
        <FontAwesomeIcon
          icon={faSun}
          className="text-xl text-blue-400"
          onClick={() => handleTheme()}
        />
      )}
    </div>
  );
};
export default ThemeToggle;
