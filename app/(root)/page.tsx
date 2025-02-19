import {
  AboutUs,
  Categories,
  ContactUs,
  HeroSection,
  LocationCard,
  SaleIncreaseCard,
  Services,
  SocialMedia,
} from "@/components/shared";

const HomePage = async () => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <HeroSection />
      <AboutUs />
      <Categories />
      <LocationCard />
      <Services />
      <SocialMedia />
      <SaleIncreaseCard />
      <ContactUs />
    </section>
  );
};

export default HomePage;
