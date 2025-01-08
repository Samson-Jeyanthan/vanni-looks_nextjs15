import {
  getAllMainCategoriesAction,
  getSubCategoriesByMainCategoryId,
} from "@/lib/actions/categories.action";
import { CategoriesFilters, DistrictsFilters } from "@/components/shared";
import { getAllDistrictsAction } from "@/lib/actions/location.action";

type Props = {
  params?: { category: string };
};

const ResultsPage = async ({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: any;
}) => {
  const categories = await getAllMainCategoriesAction();
  const districts = await getAllDistrictsAction();

  const decodedURLParams = decodeURIComponent(params.category);
  const matchedCategory =
    categories.data &&
    categories.data.find(
      (category: { title: string }) => decodedURLParams === category.title
    );

  // Parse the corresponding _id from the matched category
  const mainCategoryId = matchedCategory?._id;

  // Fetch subcategories using the parsed _id
  const subCategoryData = mainCategoryId
    ? await getSubCategoriesByMainCategoryId(mainCategoryId)
    : null;

  return (
    <section className="w-full flex-col flex items-center py-10 min-h-screen">
      <header className="max-w-7xl flex-center flex-col gap-10">
        <h1 className="gradient-title w-3/4 text-center text-[68px] font-bold">
          Empowering Local Businesses with Strategic Marketing
        </h1>
        <div>search inputs</div>
      </header>

      <div className="flex w-full max-w-7xl gap-20 mt-12">
        <div>
          <h1 className="text-xl font-bold border-b pb-2">Filters</h1>
          <CategoriesFilters
            data={JSON.stringify(categories.data)}
            subCategories={JSON.stringify(subCategoryData?.data)}
            selectedMainCategory={JSON.stringify(decodedURLParams)}
          />
          <DistrictsFilters districtData={JSON.stringify(districts.data)} />
        </div>
        results
      </div>
    </section>
  );
};

export default ResultsPage;
