import { CategoryCard } from "@/components/cards";
import { CategoriesData } from "@/constants";

const Categories = () => {
  return (
    <div
      id="categories"
      className="flex-center mb-20 w-full max-w-7xl flex-col gap-16 border-y border-light-500 py-20 xl:px-0 px-4"
    >
      <h1 className="text-3xl md:text-4xl text-center font-bold">
        Explore Local Businesses by Categories
      </h1>
      <div className="grid w-full grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {CategoriesData.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
