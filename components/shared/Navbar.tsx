import Link from "next/link";
import { DiAtom } from "react-icons/di";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex-between sticky top-0 z-50 w-full bg-light-900 px-12 py-4">
      <Link
        href="/"
        className="flex-start w-max gap-2 text-xl font-bold text-primary-500"
      >
        <DiAtom className="text-4xl" />
        <h1>Vanni Looks</h1>
      </Link>

      <div className="flex-between gap-6 text-sm">
        <Link href="#aboutus" scroll={true}>
          About
        </Link>
        <Link href="/about">Categories</Link>
        <Link href="/about">Services</Link>
        <Link href="/contact">
          <Button className="rounded-full border-none bg-primary-500 text-sm text-light-900">
            Contact Us
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
