import { Footer, Navbar } from "@/components/shared";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <section className="flex w-full flex-col items-center justify-center">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default RootLayout;
