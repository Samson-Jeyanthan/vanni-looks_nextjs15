import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  isShort: boolean;
}

const ServiceCard = ({ title, description, image, isShort }: Props) => {
  return (
    <div className={`${isShort ? "w-2/5" : "w-[55%]"} flex-center relative`}>
      <article className="z-10 flex size-full flex-col gap-8 rounded-3xl border border-light-200 bg-light-150/70 p-12 backdrop-blur-[72px]">
        <div className="z-10 flex items-center gap-8">
          <Image
            src={image}
            width={512}
            height={512}
            alt="service"
            className="size-16 object-cover"
          />

          <h3 className="text-2xl font-semibold text-light-900">{title}</h3>
        </div>
        <p className="text-justify text-sm text-light-500">{description}</p>
      </article>
      <div className="absolute bottom-0 right-20 z-0 size-48 rounded-full bg-primary-500/50 blur-lg" />
    </div>
  );
};

export default ServiceCard;
