import React from "react";
import StageBox from "@/components/stages/StageBox";
import SearchBox from "@/components/stages/SearchStage";

const Stages: React.FC = () => {
  return (
    <div className="w-full px-5 py-20">
      <h1 className="dark:text-white text-2xl font-bold">Stage Guides</h1>
      <SearchBox />
      <div className="flex flex-col gap-5 mt-5">
        <StageBox />
        <StageBox />
        <StageBox />
      </div>
    </div>
  );
};
export default Stages;
