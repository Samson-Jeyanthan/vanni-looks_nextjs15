import { CityModal, DisctrictModal } from "@/components/modals";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdminEditActionBtns } from "@/components/buttons";
import { getConvertedDate } from "@/lib/utils";
import {
  getAllCitiesAction,
  getAllDistrictsAction,
} from "@/lib/actions/location.action";
import { LocalSearchbar } from "@/components/inputs";

const Cities = async () => {
  const districtsData = await getAllDistrictsAction();
  const results = await getAllCitiesAction();
  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Cities</h1>

      <div className="flex justify-between w-full gap-20">
        <LocalSearchbar placeholder="Search by city name" iconPosition="left" />

        <CityModal
          type="create"
          districtData={JSON.stringify(districtsData?.data)}
        />
      </div>

      <Table>
        <TableCaption className="text-light-500">
          A list of created cities
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">No</TableHead>
            <TableHead>City Name</TableHead>
            <TableHead>District</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead className="text-center w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results?.data?.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="capitalize">{data.cityName}</TableCell>
              <TableCell className="capitalize">
                {data.districtId.name}
              </TableCell>
              <TableCell>{getConvertedDate(data.createdAt)}</TableCell>
              <TableCell className="flex justify-end">
                <AdminEditActionBtns />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Cities;
