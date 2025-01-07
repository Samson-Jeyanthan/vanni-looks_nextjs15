import { getAllMainCategoriesAction } from "@/lib/actions/categories.action";
import Categories from "./CategoriesFilters";

const Filters = async () => {
  const categories = await getAllMainCategoriesAction();
  return (
    <div>
      <h1>Filters</h1>
      <Categories data={JSON.stringify(categories.data)} />
    </div>
  );
};

export default Filters;
