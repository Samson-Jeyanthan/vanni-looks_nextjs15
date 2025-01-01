import { SubCategoryModal } from "@/components/modals";
import {
  getAllMainCategoriesAction,
  getAllSubCategoriesAction,
} from "@/lib/actions/categories.action";
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
import { LocalSearchbar } from "@/components/inputs";

const SubCategories = async () => {
  const mainCategoryData = await getAllMainCategoriesAction();
  const results = await getAllSubCategoriesAction();

  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Sub Categories</h1>

      <div className="flex justify-between w-full gap-20">
        <LocalSearchbar
          placeholder="Search by sub category"
          iconPosition="left"
        />
        <SubCategoryModal
          type="create"
          mainCategoryData={JSON.stringify(mainCategoryData?.data)}
        />
      </div>

      <Table>
        <TableCaption className="text-light-500">
          A list of created sub categories
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">No</TableHead>
            <TableHead>Sub Category Name</TableHead>
            <TableHead>Main Category Name</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead className="text-center w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results?.data?.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="capitalize">{data.title}</TableCell>
              <TableCell className="capitalize">
                {data.mainCategoryId.title}
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

export default SubCategories;
