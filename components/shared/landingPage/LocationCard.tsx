import Image from "next/image";

const LocationCard = () => {
  return (
    <article className="flex w-full max-w-7xl justify-between gap-20 rounded-3xl bg-light-900 p-10 shadow-lg">
      <div className="flex w-3/5 flex-col gap-8">
        <h2 className="text-4xl font-bold">
          Put Your Business in the Spot light - Start your marketing journey
          with us
        </h2>
        <p className="w-[90%] text-justify text-xl font-medium">
          At vanni looks, we put your business at the center of attention. with
          tailored marketing startegies and social media expertise, we help you
          attract the right audience, boost visibility, and achieve growth.
          Let&apos;s start your journey to success today.
        </p>
      </div>
      <Image
        src="/images/hero-1.jpg"
        width={1024}
        height={1024}
        alt="location"
        className="h-64 w-2/5 rounded-2xl object-cover"
      />
    </article>
  );
};

export default LocationCard;
