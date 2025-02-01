import { getBusinessByIdAction } from "@/lib/actions/business.action";
import { IParamsProps } from "@/types/utils.types";
import Image from "next/image";

const BusinessInfo = async ({ params }: IParamsProps) => {
  const results = await getBusinessByIdAction({ businessId: params.id });

  return (
    <section className="min-h-screen max-w-6xl mx-auto w-full">
      <header className="w-full flex flex-col items-center pt-2">
        <Image
          src={results?.data?.coverPhoto || ""}
          alt={results?.data?.name}
          width={1000}
          height={1000}
          className="w-full h-72 rounded-xl object-cover bg-light-750"
        />
        <div className="flex-center bg-light-750 min-w-36 size-36 rounded-full -mt-20 border border-light-600">
          <Image
            src={
              results?.data?.businessLogo || "/images/business-logo-d9d9d9.png"
            }
            alt={results?.data?.name}
            width={512}
            height={512}
            className={`${results?.data?.businessLogo ? "size-36 rounded-full" : "size-24"} object-cover`}
          />
        </div>
        <h1 className="text-3xl font-semibold mt-4">{results?.data?.name}</h1>
        <p className="text-md text-light-400">Since 2024</p>
      </header>

      <div>
        <div className="flex items-center gap-4"></div>
        <p className="text-justify text-sm text-light-100">
          {results?.data?.description}
        </p>
      </div>
    </section>
  );
};

export default BusinessInfo;
