import React from "react";

const AboutUs = () => {
  return (
    <div
      id="aboutus"
      className="flex-col h-full max-w-7xl items-start justify-between gap-5 py-20 xl:flex-row flex 2xl:px-0 px-4"
    >
      <h1 className="text-[42px] gradient-title flex w-full xl:w-[45%] xl:text-left text-center md:text-[68px] font-bold leading-snug ">
        Empowering Local Businesses with Strategic Marketing
      </h1>
      <p className="xl:mt-48 w-full text-justify xl:w-2/5 xl:text-left text-lg md:text-xl font-medium">
        Vanni Looks is your trusted partner in amplifying the reach and impact
        of local businesses. We specialize in comprehensive marketing solutions,
        from social media advertising to targeted campaigns that bring
        businesses closer to their communities. Our mission is to connect
        customers with the best local shops, services, and experiences by
        leveraging effective social media strategies and tailored marketing
        plans. With Vanni Looks, local businesses thrive, and customers discover
        new favorites right in their neighborhoods.
      </p>
    </div>
  );
};

export default AboutUs;
