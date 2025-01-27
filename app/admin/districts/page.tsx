import { ConfirmDeleteModal, DisctrictModal } from "@/components/modals";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getConvertedDate } from "@/lib/utils";
import { getAllDistrictsAction } from "@/lib/actions/location.action";
import { LocalSearchbar } from "@/components/inputs";

const Districts = async () => {
  const results = await getAllDistrictsAction();

  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Districts</h1>

      <div className="flex justify-between w-full gap-20">
        <LocalSearchbar
          placeholder="Search by district name"
          iconPosition="left"
        />
        <DisctrictModal type="create" />
      </div>

      <Table>
        <TableCaption className="text-light-500">
          A list of created districtss
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">No</TableHead>
            <TableHead>District Name</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead className="text-center w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results?.data?.map((data, index) => (
            <TableRow key={index} className="hover:bg-light-750">
              <TableCell>{index + 1}</TableCell>
              <TableCell className="capitalize">{data.name}</TableCell>
              <TableCell>{getConvertedDate(data.createdAt)}</TableCell>
              <TableCell className="flex-center gap-3">
                <DisctrictModal
                  type="edit"
                  districtDetails={JSON.stringify(data)}
                />
                <ConfirmDeleteModal
                  type="district"
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

export default Districts;
