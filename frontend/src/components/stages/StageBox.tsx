import React, { useState } from "react";
import { Link } from "react-router-dom";

import ItemBox from "@/components/stages/ItemBox";
import { Rewards } from "@/components/stages/data";
import { TrimDescription } from "@/components/stages/functions";
import ModeButton from "@/components/stages/ModeButton";

const Stagebox: React.FC = () => {
  const [mode, setMode] = useState<"Normal" | "Challange">("Normal");
  const description: string =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt nulla accusamus distinctionwithnoremorse";

  const trimmedDesc = TrimDescription(description);

  const currMode = Rewards.filter((reward) => reward.mode === mode);

  function handleMode(mode: "Normal" | "Challange") {
    setMode(mode);
  }

  return (
    <div className="w-full min-0h-[200px] border border-neutral-300 dark:border-neutral-700 rounded-lg p-5 flex flex-col gap-3">
      <h1 className="text-blue-400 text-2xl font-black">Hunt Them Ngg</h1>
      <h4 className="text-blue-300 font-medium jetbrains">04-15</h4>
      <p className="dark:text-white font-medium">Rewards</p>
      <div className="flex gap-5 items-center">
        <ModeButton
          handleMode={() => handleMode("Normal")}
          mode="Normal"
          state={mode}
          active={"bg-green-400 rounded-lg"}
        />
        <ModeButton
          handleMode={() => handleMode("Challange")}
          mode="Challange"
          state={mode}
          active={"bg-red-400 rounded-lg"}
        />
      </div>
      <div className="w-full p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex overflow-x-scroll gap-14">
        {currMode[0].items.map((reward) => {
          return (
            <ItemBox url={`/${reward.name}.webp`} rarity={reward.rarity} />
          );
        })}
      </div>
      <p className="dark:text-neutral-300 text-sm">{trimmedDesc}</p>
      <Link to="/view" className="w-full">
        <button className="px-3 py-2 w-full bg-blue-400 rounded-lg hover:bg-blue-600">
          View
        </button>
      </Link>
    </div>
  );
};
export default Stagebox;
