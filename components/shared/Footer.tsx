import {
  FacebookFillIcon,
  InstagramFillIcon,
  WhatsappFillIcon,
} from "@/public/svgs";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 flex h-96 w-full flex-col items-center justify-between p-12 pb-8">
      <Image
        src="/images/footer-bg.png"
        alt="footer"
        width={2048}
        height={2048}
        className="absolute right-0 top-0 z-0 size-full object-cover"
      />
      <div className="z-10 flex w-full max-w-7xl items-start justify-between gap-10">
        <div>
          <h1 className="flex flex-col text-2xl font-bold text-light-900">
            VANNI LOOKS
            <span className="text-sm">Empower & Success</span>
          </h1>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-light-500">Powered by Relooks Pvt Ltd</h3>
          <p className="w-72 text-xs text-light-400">
            Transforming businesses through innovative marketing and tailored
            social media strategies. A trusted sub-branch of Relooks Pvt Ltd,
            dedicated to driving your success
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-primary-500">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm text-light-400">
            <Link href="/#aboutus">About us</Link>
            <Link href="/#categories">Categories</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#contact">Contact us</Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-primary-500">Follow Us on</h3>
          <ul className="flex gap-2 mt-2">
            <li className="social-links-icon-footer">
              <FacebookFillIcon />
            </li>
            <li className="social-links-icon-footer">
              <WhatsappFillIcon />
            </li>
            <li className="social-links-icon-footer">
              <InstagramFillIcon />
            </li>
          </ul>
          <p className="text-xs text-light-400">
            for the Latest Updates and Insights!
          </p>
        </div>
      </div>

      <div className="flex-center z-10 w-full border-t border-light-300 pt-8 text-sm text-light-400">
        © {new Date().getFullYear()} Vanni Looks. All Rights Reserved. |
        Designed and Developed By Samson
      </div>
    </footer>
  );
};

export default Footer;
