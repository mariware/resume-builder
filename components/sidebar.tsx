"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "./button";
import {
  SquareUser,
  GraduationCap,
  Briefcase,
  PencilRuler,
} from "lucide-react";

const sections = [
  { icon: SquareUser, label: "Profile", section: "profile" },
  { icon: GraduationCap, label: "Education", section: "education" },
  { icon: Briefcase, label: "Work Experience", section: "work" },
  { icon: PencilRuler, label: "Skills", section: "skills" },
];

interface SidebarProps {
  className?: string;
  sectionIndex?: number;
  onSelect: (section: string) => void;
}

function Sidebar({ className, sectionIndex, onSelect }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex flex-col min-w-48 border-r border-r-foreground/10 text-primary-background py-2 gap-2 pt-8",
        className,
      )}
    >
      <span className="font-bold px-4 py-2 flex"> Sections </span>
      {sections.map((item, index) => {
        const isActive = index === sectionIndex;
        return (
          <button
            key={item.section}
            className={`flex items-center px-4 py-2 text-left mr-2 transition-colors
              ${isActive ? "bg-blue-200 font-semibold" : "hover:bg-blue-100"}`}
            onClick={() => onSelect(item.section)}
          >
            <item.icon className="stroke-1.5 mr-4 w-4 pt-0.5" />
            {item.label}
          </button>
        );
      })}
      <Button className="bg-blue-400 mr-2 font-bold mt-2"> Generate </Button>
    </div>
  );
}

export { Sidebar };
