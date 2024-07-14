import React from "react";
import { twMerge } from "tailwind-merge";

type TextInput = {
  type: string;
  className?: string;
  name: string;
  defaultValue?: string | "";
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInput> = ({
  type,
  className,
  name,
  placeholder,
  defaultValue,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={twMerge(
        "px-4 py-3 rounded-lg placeholder:text-neutral-900 dark:bg-neutral-800 dark:placeholder:text-neutral-100 bg-neutral-100 w-full dark:text-white",
        className
      )}
      name={name}
      defaultValue={defaultValue}
    />
  );
};
export default TextInput;
