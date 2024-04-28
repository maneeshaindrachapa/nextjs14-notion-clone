"use client";
import { useScrollTop } from "@/hooks/use-scroll-hook";
import { cn } from "@/lib/utils";
import React from "react";
import { Logo } from "./logo";

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-4",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        Login
      </div>
    </div>
  );
};
