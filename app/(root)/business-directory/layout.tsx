import { Filters } from "@/components/shared";
import React from "react";

const ResultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full flex-col flex-center py-10">
      <header className="max-w-7xl flex-center">
        <h1 className="gradient-title w-3/4 text-center text-[68px] font-bold">
          Empowering Local Businesses with Strategic Marketing
        </h1>
      </header>
      <div className="flex w-full max-w-7xl gap-8">
        <Filters />
        {children}
      </div>
    </section>
  );
};

export default ResultLayout;
