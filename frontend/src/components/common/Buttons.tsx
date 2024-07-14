import React from "react";

import { twMerge } from "tailwind-merge";

type BaseButton = {
  content: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
};

export const PrimaryButton: React.FC<BaseButton> = ({
  content,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "px-4 py-3 bg-blue-400 rounded-lg font-bold",
        className
      )}
    >
      {content}
    </button>
  );
};
