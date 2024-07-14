import React, { useState } from "react";
import TextInput from "@/components/form/TextInput";
import { PrimaryButton } from "@/components/common/Buttons";

const SearchBox: React.FC = () => {
  const [searchStage, setSearchStage] = useState<string>("");
  function handleSearchStage(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchStage(e.target.value);
  }

  function handleSearchButton() {
    console.log(searchStage);
  }
  return (
    <>
      {" "}
      <form className="flex gap-3 items-center mt-5">
        <TextInput
          placeholder="Search Stage"
          name="search_stage"
          type="text"
          className="focus:outline-none"
          onChange={handleSearchStage}
        />
        <PrimaryButton
          content="Search"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            handleSearchButton();
          }}
        />
      </form>
    </>
  );
};
export default SearchBox;
