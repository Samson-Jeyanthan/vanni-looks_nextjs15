import {
  AboutUs,
  Categories,
  HeroSection,
  LocationCard,
  Services,
} from "@/components/shared";

const HomePage = () => {
  return (
    <section className="flex w-full max-w-7xl flex-col items-center justify-center">
      <HeroSection />
      <AboutUs />
      <Categories />
      <LocationCard />
      <Services />
    </section>
  );
};

export default HomePage;
