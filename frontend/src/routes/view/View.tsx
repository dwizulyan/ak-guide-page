import React from "react";

import { Rewards } from "@/components/stages/data";
import ItemBox from "@/components/stages/ItemBox";

const View: React.FC = () => {
  const normalRewards = Rewards.filter((rewards) => rewards.mode === "Normal");
  const ChallangeRewards = Rewards.filter(
    (rewards) => rewards.mode === "Challange"
  );
  return (
    <div className="w-full min-h-screen px-5 py-20">
      <img src="/maps/0-1_map.webp" alt="0-1_map" />
      <h1 className="text-blue-400 text-2xl font-bold mt-2">Hunt Them Ngg</h1>
      <h4 className="text-blue-300 font-medium">04-15</h4>
      <p className="dark:text-white text-xl">Rewards</p>
      <div className="flex flex-col mt-5">
        <p className="dark:text-white mb-3">Normal</p>
        <div className="flex flex-wrap gap-10">
          {normalRewards[0].items.map((item) => {
            return <ItemBox url={`/${item.name}.webp`} rarity={item.rarity} />;
          })}
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <p className="dark:text-white mb-3">Challange</p>
        <div className="flex flex-wrap gap-10">
          {ChallangeRewards[0].items.map((item) => {
            return <ItemBox url={`/${item.name}.webp`} rarity={item.rarity} />;
          })}
        </div>
      </div>
      <div className="mt-5">
        <p className="dark:text-white text-xl mb-2">Description / Condition</p>
        <p className="dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          nesciunt nulla accusamus distinctionwithnoremorse;
        </p>
      </div>
    </div>
  );
};
export default View;
