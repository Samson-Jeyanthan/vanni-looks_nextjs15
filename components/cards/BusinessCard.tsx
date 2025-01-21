import { EmailFillIcon, LinkFillIcon } from "@/public/svgs";
import Image from "next/image";
import Link from "next/link";

type Props = {
  _id: string;
  businessName: string;
  logo: string;
  mainCategory: string;
  subCategory: string;
  address: string;
  phone: {
    number: string;
    type: "LANDLINE" | "MOBILE" | "FAX" | "WHATSAPP";
  };
  email: string;
  website: string;
};

const BusinessCard = ({
  _id,
  businessName,
  logo,
  mainCategory,
  subCategory,
  address,
  phone,
  email,
  website,
}: Props) => {
  return (
    <article className="bg-light-900 rounded-3xl p-6 w-full">
      <div className="flex items-start gap-6">
        <Image
          src={logo || "/images/business-logo-d9d9d9.png"}
          alt="logo"
          width={512}
          height={512}
          className={`${logo ? "p-0" : "p-3.5"} rounded-full size-24 object-cover bg-light-800`}
        />
        <div>
          <Link
            href={`/business/${_id}`}
            className="font-semibold text-2xl hover:text-primary-500"
          >
            {businessName}
          </Link>
          <p className="text-sm">{address}</p>
          <p className="capitalize text-light-400 text-sm">
            {mainCategory} / {subCategory}
          </p>
          <div className="flex gap-8 mt-6">
            {phone.number && <p>{phone.number}</p>}
            {email && (
              <p className="business-card-contact">
                <span className="business-card-icon">
                  <EmailFillIcon width="16px" height="16px" />
                </span>
                {email}
              </p>
            )}
            {website && (
              <p className="business-card-contact">
                <span className="business-card-icon">
                  <LinkFillIcon width="12px" height="12px" />
                </span>
                {website}
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BusinessCard;
