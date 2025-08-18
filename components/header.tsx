import * as React from "react";
import { cn } from "../lib/utils";
import { Logo } from "./logo";
import { Button } from "./button";

interface HeaderProps {
  prefillData: () => void;
  className?: string;
}

function Header({ prefillData, className }: HeaderProps) {
  return (
    <div
      className={cn(
        "w-full flex justify-center bg-blue-400 text-primary-foreground",
        className,
      )}
    >
      <div className="w-full lg:max-w-7xl flex justify-between items-center px-10 py-4 text-sm">
        <Logo className="h-6 fill-white" />
        <Button
          onClick={() => {
            if (
              window.confirm(
                "Loading the sample will reset all inputs. Do you wish to proceed?",
              )
            )
              prefillData();
          }}
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold padding-0"
        >
          Load Sample
        </Button>
      </div>
    </div>
  );
}

export { Header };
