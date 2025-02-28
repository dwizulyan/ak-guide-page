import React from "react";
import { twMerge } from "tailwind-merge";

const ItemBox: React.FC<{
  url: string;
  rarity:
    | "Guaranteed"
    | "Uncommon"
    | "Very_Rare"
    | "Rare"
    | "Common"
    | "First_Clear";
}> = ({ url, rarity }) => {
  const rarityColor = {
    Guaranteed: "bg-green-500",
    Very_Rare: "bg-red-500",
    Uncommon: "bg-slate-500",
    Rare: "bg-yellow-500",
    Common: "bg-blue-500",
    First_Clear: "bg-amber-500",
  };

  return (
    <div className="relative shrink-0 w-max dark:bg-neutral-700  bg-neutral-300 rounded-full h-12 w-12 flex items-center justify-center">
      <img src={url} alt={url} className="w-[45px]" />
      <h1
        className={twMerge(
          "px-1 rounded-sm absolute left-0 bottom-0 text-xs w-max jetbrains",
          rarityColor[rarity]
        )}
      >
        {rarity.replaceAll("_", " ")}
      </h1>
    </div>
  );
};
export default ItemBox;
