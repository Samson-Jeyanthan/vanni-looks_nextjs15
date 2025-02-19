import Link from "next/link";
import { DiAtom } from "react-icons/di";
import { Button } from "../ui/button";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flex-between sticky top-0 z-50 w-full bg-light-900 px-12 py-4 shadow-lg shadow-black/5">
      <Link
        href="/"
        className="flex-start w-max gap-2 text-xl font-bold text-primary-500"
      >
        <DiAtom className="text-4xl" />
        <h1>Vanni Looks</h1>
      </Link>

      <div className="flex-between gap-6">
        {NAV_LINKS.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            scroll={item.scroll}
            className="font-semibold text-sm"
          >
            {item.name}
          </Link>
        ))}
        <Button className="rounded-full border-none bg-primary-500 text-sm text-light-900">
          Contact Us
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
