import { MainCategoryModal } from "@/components/modals";
import { GetAllMainCategoriesAction } from "@/lib/actions/categories.action";
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

const MainCategories = async () => {
  const results = await GetAllMainCategoriesAction();

  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Main Categories</h1>

      <div className="flex justify-between w-full">
        search bar
        <MainCategoryModal type="create" />
      </div>

      <Table>
        <TableCaption className="text-light-500">
          A list of created main categories
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">No</TableHead>
            <TableHead>Icon</TableHead>
            <TableHead>Category Name</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead className="text-right w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results?.data?.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{data.icon?.mediaType}</TableCell>
              <TableCell>{data.title}</TableCell>
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

export default MainCategories;
