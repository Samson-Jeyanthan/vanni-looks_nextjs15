import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-[85vh] w-full max-w-7xl rounded-3xl">
      <Image
        src="/images/hero-1.jpg"
        width={1000}
        height={1000}
        alt="hero"
        className="size-full rounded-3xl object-cover"
      />
    </div>
  );
};

export default HeroSection;
