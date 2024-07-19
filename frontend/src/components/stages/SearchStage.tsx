import React from "react";
import TextInput from "@/components/form/TextInput";
import { PrimaryButton } from "@/components/common/Buttons";

type SearchBox = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};

const SearchBox: React.FC<SearchBox> = ({ onChange, onClick }) => {
  return (
    <>
      {" "}
      <form className="flex gap-3 items-center mt-5">
        <TextInput
          placeholder="Search Stage"
          name="search_stage"
          type="text"
          className="focus:outline-none"
          onChange={(e) => onChange(e)}
        />
        <PrimaryButton
          content="Search"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            onClick();
          }}
        />
      </form>
    </>
  );
};
export default SearchBox;
