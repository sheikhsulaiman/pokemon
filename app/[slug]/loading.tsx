import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col p-2 gap-2">
        <Skeleton className="w-20 h-6"></Skeleton>
      </div>
      <div className="flex gap-4 flex-col mt-6 md:flex-row">
        <Skeleton className="w-28 h-10"></Skeleton>
        <Skeleton className="w-28 h-10"></Skeleton>
        <Skeleton className="w-28 h-10"></Skeleton>
      </div>
      <div className="flex gap-4 flex-col mt-6 md:flex-row">
        <Skeleton className="w-96 h-72"></Skeleton>
        <div className="w-full md:space-x-2">
          <div className="flex md:p-2 items-center justify-between">
            <Skeleton className="w-64 h-12" />
            <div className="flex items-center justify-center gap-2">
              <Skeleton className="w-16 h-4" />
              <Skeleton className="w-16 h-4" />
              <Skeleton className="w-16 h-4" />
            </div>
          </div>
          <div className="space-y-1">
            <Skeleton className="w-56 h-6" />
            <Skeleton className="w-72 h-6" />
            <Skeleton className="w-56 h-6" />
            <Skeleton className="w-72 h-6" />
            <div className="border p-2 flex flex-col rounded-sm">
              <div className="flex flex-wrap gap-2">
                <Skeleton className="w-28 h-11" />
                <Skeleton className="w-44 h-11" />
                <Skeleton className="w-32 h-11" />
                <Skeleton className="w-28 h-11" />
                <Skeleton className="w-44 h-11" />
                <Skeleton className="w-40 h-11" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default loading;
