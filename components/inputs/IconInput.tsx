"use client";

import { useMedia } from "@/lib/hooks/useMedia";
import { IMediaProps } from "@/types/utils.types";
import { ChangeEvent, useRef, useState } from "react";

type Props = {
  fieldChange: (e: any) => void;
  previousMedia: IMediaProps;
  setPreviousMedia: (media: IMediaProps) => void;
};

const IconInput = ({ fieldChange, previousMedia, setPreviousMedia }: Props) => {
  const photoRef = useRef<HTMLInputElement>(null);
  const { handleImageInput, error, media, setMedia } = useMedia();
  const [selectedItem, setSelectedItem] = useState({
    isURL: previousMedia ? true : false,
    index: 0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleImageInput({
      e,
      isMultiple: false,
      acceptFileType: ["image/png"],
      filesLimit: 1,
    });
    setSelectedItem({ isURL: false, index: 0 });
  };

  const handleInputBtn = () => {
    photoRef.current?.click();
  };

  return (
    <div className="">
      <input
        type="file"
        ref={photoRef}
        hidden
        onChange={handleInputChange}
        accept="image/png"
      />

      {media?.fileName === "" && (
        <div
          className="flex-center border rounded-lg border-solid border-light-700 p-6 py-10 text-sm cursor-pointer"
          onClick={handleInputBtn}
        >
          Click here to upload an icon
        </div>
      )}
    </div>
  );
};

export default IconInput;
