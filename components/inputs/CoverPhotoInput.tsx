"use client";

import { ChangeEvent, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { CameraIcon } from "@/public/svgs";
import Image from "next/image";
import { useMedia } from "@/lib/hooks/useMedia";

type Props = {
  fieldChange: (e: any) => void;
  mediaUrl?: string | null;
};

const CoverPhotoInput = ({ fieldChange, mediaUrl }: Props) => {
  const photoRef = useRef<HTMLInputElement>(null);
  const [isActionOpen, setIsActionOpen] = useState(false);
  const { handleImageInput, media } = useMedia();

  // handle the photo action modal open and input change
  const handleInputBtn = () => {
    if (media.preview) {
      setIsActionOpen(true);
    } else {
      photoRef.current?.click();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleImageInput({
      e,
      isMultiple: false,
      acceptFileType: ["image/png", "image/jpeg", "image/jpg", "image/webp"],
      filesLimit: 1,
    });
    fieldChange(e.target.files);
  };

  return (
    <>
      <div className="flex-center bg-light-750 relative w-full h-72 rounded-2xl">
        <input
          type="file"
          ref={photoRef}
          hidden
          onChange={handleInputChange}
          accept="image/jpeg,image/jpg,image/png,image/webp"
        />
        {media.preview && (
          <Image
            src={media.preview}
            alt="business_cover_photo"
            width={1024}
            height={1024}
            className="w-full h-72 rounded-2xl object-cover"
          />
        )}
        <div
          className="absolute flex items-center gap-2 px-3 bottom-3 right-3 cursor-pointer rounded-lg bg-light-100 fill-white py-3 text-white text-sm"
          onClick={handleInputBtn}
        >
          {media.preview ? (
            <>
              <MdEdit fill="white text-3xl" />
              Edit Cover Photo
            </>
          ) : (
            <>
              <CameraIcon fill="white" width="21px" height="21px" />
              Add Cover Photo
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CoverPhotoInput;
