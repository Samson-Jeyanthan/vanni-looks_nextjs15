import { CreateCategoryModal } from "@/components/modals";

const MainCategories = () => {
  return (
    <section className="w-full flex-col flex gap-8">
      <h1 className="text-3xl font-bold">Main Categories</h1>

      <div className="flex justify-between w-full">
        search bar
        <CreateCategoryModal type="create" />
      </div>

      <div>results</div>
    </section>
  );
};

export default MainCategories;
