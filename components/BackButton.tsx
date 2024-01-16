"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button onClick={router.back}>
      <p className="flex items-center">
        <ChevronLeft className="h-4 w-4" />
        Back
      </p>
    </button>
  );
};

export default BackButton;
