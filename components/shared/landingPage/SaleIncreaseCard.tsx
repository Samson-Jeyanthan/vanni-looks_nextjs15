import Image from "next/image";
import React from "react";

const SaleIncreaseCard = () => {
  return (
    <article className="z-10 -mb-10 flex w-full max-w-7xl justify-between gap-16 rounded-3xl bg-light-900 p-12 shadow-lg">
      <Image
        src="/images/sales-increase.png"
        width={1024}
        height={1024}
        alt="location"
        className="size-48 rounded-2xl object-contain"
      />
      <div className="flex w-full flex-col gap-6 text-light-100">
        <h2 className="text-4xl font-bold">
          Drive Sales and Build Loyalty with Tailored Marketing Solutions
        </h2>
        <p className="text-left text-lg font-medium">
          At Vanni Looks, we understand that every business is unique. Our
          tailored marketing solutions are designed to connect you with your
          ideal customers, increase foot traffic, and build lasting brand
          loyalty. From targeted social media campaigns to strategic promotions,
          we’re here to help you drive sales and create meaningful connections
          with your community.
        </p>
      </div>
    </article>
  );
};

export default SaleIncreaseCard;
