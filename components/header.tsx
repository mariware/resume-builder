import * as React from "react";
import { cn } from "../lib/utils";
import { Logo } from "./logo";

interface HeaderProps {
  className?: string;
}

function Header({ className }: HeaderProps) {
  return (
    <div
      className={cn(
        "w-full flex justify-center bg-blue-400 text-primary-foreground",
        className,
      )}
    >
      <div className="w-full lg:max-w-7xl flex justify-between items-center px-10 py-4 text-sm">
        <Logo className="h-6 fill-white" />
      </div>
    </div>
  );
}

export { Header };
