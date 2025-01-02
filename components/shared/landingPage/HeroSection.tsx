import HeroCarousel from "@/components/carousel/HeroCarousel";
import { HeroInput } from "@/components/inputs";
import { FlipWords } from "@/components/ui/flip-word";
import { EmblaOptionsType } from "embla-carousel";

const HeroSection = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div className="relative h-[85vh] w-full max-w-7xl rounded-3xl">
      <div className="flex-center absolute z-10 size-full flex-col rounded-3xl bg-gradient-to-b from-[rgb(17,19,27,0.0)] to-[rgba(16,23,28)]">
        <p className="text-lg font-semibold text-light-900">
          Discover Local Businesses in Sri Lanka with
        </p>
        <h1 className="text-[72px] font-bold leading-tight text-light-900">
          VANNI LOOKS
        </h1>
        <FlipWords
          words={[
            "Find Grocery, Beauty, Fashion, and More",
            "Empower Your Business",
            "Drive Success with Vanni Looks",
            "Transform Your Business with Vanni Looks",
          ]}
          className="ml-0 pl-0 text-3xl font-semibold"
          duration={4500}
        />
        <HeroInput />
      </div>
      <HeroCarousel
        slides={[
          "/images/hero-1.jpg",
          "/images/hero-1.jpg",
          "/images/hero-1.jpg",
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
          "/images/hero-1.jpg",
        ]}
        options={OPTIONS}
      />
    </div>
  );
};

export default HeroSection;
