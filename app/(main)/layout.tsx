"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { SearchCommand } from "@/components/search-command";
//
import { Navigation } from "./_components/navigation";
import { Spinner } from "@/components/spinner";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center">
        <Spinner size={"lg"} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-[100vh] flex dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
