"use client";

import { LEFT_SIDEBAR_LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DiAtom } from "react-icons/di";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-72 min-w-72 sticky top-0 left-0 min-h-screen bg-light-900 p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-10">
        <header className="flex-start w-max gap-2 text-xl font-bold text-primary-500">
          <DiAtom className="text-4xl" />
          <h1>Vanni Looks</h1>
        </header>

        <div className="flex gap-4 flex-col">
          {LEFT_SIDEBAR_LINKS.map((item, index) => {
            const isActive =
              (pathname.startsWith(item.route) && item.route.length > 1) ||
              pathname === item.route;
            return (
              <Link
                key={index}
                href={item.route}
                className={`${isActive ? "text-primary-500" : ""}`}
              >
                <p className="text-sm">{item.name}</p>
              </Link>
            );
          })}
        </div>
      </div>

      <div>Logout</div>
    </aside>
  );
};

export default LeftSidebar;
