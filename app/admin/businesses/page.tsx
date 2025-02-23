import { LocalSearchbar } from "@/components/inputs";
import { ConfirmDeleteModal } from "@/components/modals";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllBusinessesAction } from "@/lib/actions/business.action";
import { getConvertedDate } from "@/lib/utils";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

const Businesses = async () => {
  const results = await getAllBusinessesAction("");
  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Businesses</h1>

      <header className="flex justify-between w-full gap-20">
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
      </header>

      <Table>
        <TableCaption className="text-light-500">
          A list of created businesses
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">No</TableHead>
            <TableHead>Business Name</TableHead>
            <TableHead>Cetegory</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead className="text-center w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results?.data?.map((data, index) => (
            <TableRow key={index} className="hover:bg-light-750">
              <TableCell>{index + 1}</TableCell>
              <TableCell className="capitalize">
                <Link href={`/admin/businesses/${data._id}`}>{data.name}</Link>
              </TableCell>
              <TableCell className="capitalize">
                {data.mainCategoryId.title}
              </TableCell>
              <TableCell className="capitalize">
                {data.districtId.name} - {data.cityId.cityName}
              </TableCell>
              <TableCell>{getConvertedDate(data.createdAt)}</TableCell>
              <TableCell className="flex-center gap-3">
                {/* <CityModal
                  type="edit"
                  cityDetails={JSON.stringify(data)}
                  districtData={JSON.stringify(districtsData?.data)}
                /> */}
                <ConfirmDeleteModal
                  type="business"
                  itemId={JSON.stringify(data._id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Businesses;
