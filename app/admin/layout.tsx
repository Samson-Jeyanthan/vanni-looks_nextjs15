import { LeftSidebar } from "@/components/shared/admin";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex bg-light-800 min-h-screen w-full">
      <LeftSidebar />

      <section className="flex w-full flex-col p-10 items-center">
        <div className="flex mx-auto w-full max-w-7xl">{children}</div>
      </section>
    </main>
  );
}