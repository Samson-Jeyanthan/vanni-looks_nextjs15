import { ServiceCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import { ServicesData } from "@/constants";

const Services = () => {
  return (
    <div
      id="services"
      className="flex w-full flex-col items-center gap-20 bg-light-150 p-20 pt-28"
    >
      <h2 className="gradient-title-dark-bg bg-clip-text text-center text-4xl font-semibold text-transparent">
        Services We Provide
      </h2>

      <div className="flex max-w-7xl flex-wrap justify-center gap-8">
        {ServicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            isShort={service.isShort}
          />
        ))}
      </div>

      <Button className="rounded-full border-none bg-light-900 text-sm text-light-100">
        Further Details
      </Button>
    </div>
  );
};

export default Services;
