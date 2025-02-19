import { getBusinessByIdAction } from "@/lib/actions/business.action";
import { IParamsProps } from "@/types/utils.types";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import {
  EmailFillIcon,
  FacebookFillIcon,
  InstagramFillIcon,
  LinkFillIcon,
  WhatsappFillIcon,
} from "@/public/svgs";
import { getSinceYear } from "@/lib/utils";

const BusinessInfo = async ({ params }: IParamsProps) => {
  const results = await getBusinessByIdAction({ businessId: params.id });

  return (
    <section className="min-h-screen max-w-5xl mx-auto w-full">
      <header className="w-full flex flex-col items-center pt-2">
        <Image
          src={results?.data?.coverPhoto || "/images/business-cover-photo.jpg"}
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
        <p className="text-md text-light-400">
          Since {getSinceYear(results?.data?.establishedAt)}
        </p>
      </header>

      <div className="mt-4 flex flex-col gap-4">
        <div className="flex-between gap-8 w-full">
          <p className="flex items-center gap-4 text-base font-medium rounded-md bg-light-800 p-2 px-4 w-max capitalize">
            {results?.data?.mainCategoryId?.title} /{" "}
            {results?.data?.subCategoryId?.title}
          </p>
          <ul className="flex gap-2 mt-2">
            <li className="social-links-icon">
              <FacebookFillIcon />
            </li>
            <li className="social-links-icon">
              <WhatsappFillIcon />
            </li>
            <li className="social-links-icon">
              <InstagramFillIcon />
            </li>
          </ul>
        </div>

        <p className="flex items-center gap-2 text-sm mt-4">
          <IoLocationSharp className="text-xl" />
          {results?.data?.address}
        </p>
        <p className="flex items-center gap-2 text-sm mb-4 capitalize">
          <BsBuildingsFill className="text-xl" />
          {
            results?.data?.registrationType
          } - {results?.data?.registrationNumber}
        </p>
        <h3 className="text-lg font-semibold -mb-3">About us</h3>
        <p className="text-justify text-sm text-light-100 border-b border-light-700 pb-8">
          {results?.data?.description}
        </p>
      </div>

      <div className="flex w-full flex-col gap-4 mt-8 mb-12">
        <h3 className="text-lg font-semibold">Contact Details</h3>
        <div className="flex flex-wrap gap-6">
          {results?.data?.email && (
            <p className="business-card-contact">
              <span className="business-card-icon">
                <EmailFillIcon width="16px" height="16px" />
              </span>
              {results?.data?.email}
            </p>
          )}
          {results?.data?.website && (
            <p className="business-card-contact">
              <span className="business-card-icon">
                <LinkFillIcon width="12px" height="12px" />
              </span>
              {results?.data?.website}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
