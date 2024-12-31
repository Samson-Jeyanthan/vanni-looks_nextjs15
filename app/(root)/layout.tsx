import React from "react";
import { Footer, Navbar } from "@/components/shared";
import { Toaster } from "@/components/ui/sonner";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <section className="flex w-full flex-col items-center justify-center">
        {children}
      </section>
      <Footer />
      <Toaster />
    </main>
  );
};

export default RootLayout;
