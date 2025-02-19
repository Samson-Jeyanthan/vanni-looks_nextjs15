"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";

type Props = {
  formLabel: string;
  formDescription?: string;
  prevValues?: any;
  options: { value: string; name: string }[];
  inputPlaceholder?: string;
};

type TAddedOption = {
  value: string;
  name: string;
};

const ArrayInput = ({
  formLabel,
  formDescription,
  prevValues,
  options,
  inputPlaceholder,
}: Props) => {
  const [addedValue, setAddedValue] = useState<TAddedOption[]>([]); // all added inputs into array
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleOkClick = () => {
    console.log(selectedOption, inputValue, addedValue);
    if (selectedOption && inputValue) {
      setAddedValue([
        ...addedValue,
        { value: inputValue, name: selectedOption },
      ]);
      setInputValue("");
      setSelectedOption("");
      setError("");
    } else {
      setError("Please fill all the fields");
    }
  };

  const handleDelete = (index: number) => {
    setAddedValue(addedValue.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col w-4/6 gap-2">
      <label className="text-sm font-semibold">{formLabel}</label>
      {addedValue.length > 0 && (
        <div className="flex flex-col gap-1">
          {addedValue.map((value, index) => (
            <div
              key={index}
              className="flex items-center gap-4 py-2 border-b border-light-700"
            >
              <span className="text-sm font-semibold">{value.name}</span>
              <span className="text-sm font-semibold">{value.value}</span>
              <span
                className="text-xl cursor-pointer text-red-500"
                onClick={() => handleDelete(index)}
              >
                <MdDelete />
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center w-full gap-6">
        <div className="w-full flex gap-6">
          <Select onValueChange={(value: string) => setSelectedOption(value)}>
            <SelectTrigger className="w-[280px] no-focus border border-solid border-light-700 bg-light-800 text-sm">
              {selectedOption ? <SelectValue /> : <p></p>}
            </SelectTrigger>
            <SelectContent className="no-focus text-light-100 border border-solid border-light-700 bg-light-800 text-sm">
              {options?.map((option, index) => (
                <SelectItem
                  key={index}
                  value={option?.value}
                  className="cursor-pointer capitalize hover:bg-light-700"
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            className="no-focus text-light-100 bg-light-800 border border-solid border-light-700 text-sm placeholder:text-light-500"
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <Button
          className="rounded-full text-sm bg-light-750 border-none"
          type="button"
          onClick={handleOkClick}
        >
          OK
        </Button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {formDescription && <p className="text-sm">{formDescription}</p>}
    </div>
  );
};

export default ArrayInput;
