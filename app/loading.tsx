import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <main className="container min-h-screen mx-auto">
      <Skeleton className="w-full h-14" />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6 sm:col-span-4 md:col-span-3">
          <div className="w-full h-full">
            <Skeleton className="w-full h-36" />
            <Skeleton className="w-full h-6" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default loading;
