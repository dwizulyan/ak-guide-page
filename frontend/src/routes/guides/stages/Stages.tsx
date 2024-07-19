import React, { useState, useEffect, ChangeEvent } from "react";
import StageBox from "@/components/stages/StageBox";
import SearchBox from "@/components/stages/SearchStage";
import { Stage } from "@/components/stages/Types";

const Stages: React.FC = () => {
  const [search, setSearch] = useState<string>();
  const [stages, setStages] = useState<Stage[]>();

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  function handleClick() {
    console.log(search);
  }

  useEffect(() => {
    async function fetchStage() {
      try {
        const response = await fetch("http://192.168.0.9:3000/api/v1/stage");
        const result = await response.json();
        setStages(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchStage();
  }, []);
  stages ? console.log(stages) : console.log("Loading");
  return (
    <div className="w-full px-5 py-20">
      <h1 className="dark:text-white text-2xl font-bold">Stage Guides</h1>
      <SearchBox onChange={handleSearch} onClick={handleClick} />
      <div className="flex flex-col gap-5 mt-5">
        {stages ? (
          stages.map((stage) => {
            return <StageBox data={stage} />;
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};
export default Stages;
