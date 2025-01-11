import Image from "next/image";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex-center w-full max-w-7xl flex-col gap-8 py-20">
      <h1 className="gradient-title w-3/4 text-center text-[68px] font-bold">
        We grow your business by leveraging the power of social media
      </h1>
      <Image
        width={2024}
        height={2024}
        src="/images/all-social-medias.png"
        alt="hero"
        className="w-[44%] object-cover"
      />
    </div>
  );
};

export default SocialMedia;
