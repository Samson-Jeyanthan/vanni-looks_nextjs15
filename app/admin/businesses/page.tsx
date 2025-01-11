import { LocalSearchbar } from "@/components/inputs";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

const page = () => {
  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Businesses</h1>

      <div className="flex justify-between w-full gap-20">
        <LocalSearchbar
          placeholder="Search by business name"
          iconPosition="left"
        />

        <Link
          href="/admin/businesses/create"
          className="flex gap-2 items-center p-3 bg-primary-500 text-light-900 font-medium rounded-lg"
        >
          <FaPlus /> Add Business
        </Link>
      </div>
    </section>
  );
};

export default page;
