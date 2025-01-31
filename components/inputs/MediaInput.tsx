"use client";

import { useMedia } from "@/hooks/useMedia";
import { IMediaProps } from "@/types/utils.types";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { MdClose } from "react-icons/md";

type Props = {
  fieldChange: (e: any) => void;
  previousMedia: IMediaProps[];
  setPreviousMedia: (media: IMediaProps[]) => void;
};

const MediaInput = ({
  fieldChange,
  previousMedia,
  setPreviousMedia,
}: Props) => {
  const photoRef = useRef<HTMLInputElement>(null);
  const { handleImageInput, error, multipleMedia, setMultipleMedia } =
    useMedia();
  const allMedia = multipleMedia.length + previousMedia.length;
  const [selectedItem, setSelectedItem] = useState({
    isURL: previousMedia.length > 0,
    index: 0,
  });

  const handleInputBtn = () => {
    photoRef.current?.click();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleImageInput({
      e,
      isMultiple: true,
      acceptFileType: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
      filesLimit: 20 - allMedia,
    });
    setSelectedItem({ isURL: false, index: 0 });
  };

  const handleRemoveMedia = (item: { isURL: boolean; index: number }) => {
    if (multipleMedia.length > 1) {
      setSelectedItem({ isURL: false, index: 0 });
    } else {
      setSelectedItem({ isURL: true, index: 0 });
    }

    if (item.isURL) {
      const updatedMedia = [...previousMedia];
      updatedMedia.splice(item.index, 1);
      setPreviousMedia(updatedMedia);
    } else {
      const updatedMedia = [...multipleMedia];
      updatedMedia.splice(item.index, 1);
      setMultipleMedia(updatedMedia);
    }
  };

  const LargeMediaDisplay = ({ src, onClick }: any) => {
    return (
      <div className="relative">
        <Image
          src={src || ""}
          alt="first-image"
          width={1024}
          height={1024}
          className="h-96 w-full rounded-lg object-cover"
        />
        <span
          className="absolute right-2 top-2 cursor-pointer rounded-full bg-light-500 p-1.5 text-lg"
          onClick={onClick}
        >
          <MdClose />
        </span>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <input
        type="file"
        ref={photoRef}
        hidden
        onChange={handleInputChange}
        accept="image/jpeg,image/jpg,image/png,image/webp"
        multiple
      />
      <div
        className="text-dark-300_light-750 flex-center h-72 w-full cursor-pointer gap-2 rounded-2xl border border-dashed border-light-500 bg-transparent text-sm dark:border-dark-400"
        onClick={handleInputBtn}
      >
        Click here to add files
      </div>

      <div>
        {allMedia > 0 && selectedItem.isURL ? (
          <>
            {previousMedia.length > 0 && (
              <LargeMediaDisplay
                src={previousMedia[selectedItem.index].mediaURL}
                onClick={() =>
                  handleRemoveMedia({ isURL: true, index: selectedItem.index })
                }
              />
            )}
          </>
        ) : (
          <>
            {multipleMedia.length > 0 && (
              <LargeMediaDisplay
                src={multipleMedia[selectedItem.index].preview || ""}
                onClick={() =>
                  handleRemoveMedia({ index: selectedItem.index, isURL: false })
                }
              />
            )}
          </>
        )}
      </div>

      <div className="flex w-full items-center justify-center gap-6">
        {allMedia > 1 && (
          <>
            {multipleMedia.map((media, index) => (
              <Image
                key={index}
                src={media.preview || ""}
                alt="cropped-cover-image"
                width={120}
                height={120}
                onClick={() => setSelectedItem({ index, isURL: false })}
                className="size-20 min-w-20 cursor-pointer rounded-md object-cover"
              />
            ))}
            {previousMedia.map((media, index) => (
              <Image
                key={index}
                src={media.mediaURL || ""}
                alt="cropped-cover-image"
                width={120}
                height={120}
                onClick={() => {
                  setSelectedItem({ index, isURL: true });
                  console.log(index);
                }}
                className="size-20 min-w-20 cursor-pointer rounded-md object-cover"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MediaInput;
