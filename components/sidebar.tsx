"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "./button";

const sections = [
  { label: "Profile", section: "profile" },
  { label: "Education", section: "education" },
  { label: "Work Experience", section: "work" },
  { label: "Skills", section: "skills" },
  { label: "Projects", section: "projects" },
];

interface SidebarProps {
  className?: string;
}

function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex flex-col min-w-48 border-r border-r-foreground/10 text-primary-background py-2 gap-2 pt-8",
        className,
      )}
    >
      <span className="font-bold px-4 py-2 flex"> Sections </span>
      {sections.map((item) => (
        <button
          key={item.section}
          className="px-4 py-2 text-left hover:bg-blue-100 mr-2"
          onClick={() => console.log(`${item.section}`)}
        >
          {item.label}
        </button>
      ))}
      <Button className="bg-blue-400 mr-2 font-bold mt-2"> Generate </Button>
    </div>
  );
}

export { Sidebar };
