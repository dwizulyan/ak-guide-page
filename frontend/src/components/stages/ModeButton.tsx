import React from "react";
import { twMerge } from "tailwind-merge";

type ModeButtonType = {
  handleMode: (mode: "Normal" | "Challange") => void;
  mode: string;
  state: "Normal" | "Challange";
  active: string;
};

const ModeButton: React.FC<ModeButtonType> = ({
  handleMode,
  mode,
  state,
  active,
}) => {
  return (
    <button
      onClick={() => handleMode("Challange")}
      className={twMerge(
        "px-4 py-2  font-bold",
        state === mode
          ? active
          : "font-bold bg-neutral-200 dark:text-white dark:bg-neutral-800 rounded-lg"
      )}
    >
      {mode}
    </button>
  );
};
export default ModeButton;
