"use client";

import { useState } from "react";
import { Button } from "../../components/button";
import { Sidebar } from "../../components/sidebar";
import { ProfileSection } from "../../components/sections/ProfileSection";
import { EducationSection } from "../../components/sections/EducationSection";
import { WorkSection } from "../../components/sections/WorkSection";
import { SkillsSection } from "../../components/sections/SkillsSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ResumeData } from "@/models/types";

const sections = [
  { id: "profile", component: ProfileSection },
  { id: "education", component: EducationSection },
  { id: "work", component: WorkSection },
  { id: "skills", component: SkillsSection },
];

export default function Home() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [resumeData, setResumeData] = useState<ResumeData>({
    profile: {
      name: "",
      profession: "",
      phoneNumber: "",
      email: "",
      linkedin: "",
      portfolio: "",
      description: "",
    },
    education: [
      {
        school: "",
        schoolLocation: "",
        degree: "",
        schoolStartDate: "",
        schoolEndDate: "",
      },
    ],
    work: [
      {
        company: "",
        workLocation: "",
        position: "",
        workStartDate: "",
        workEndDate: "",
        workDescription: "",
      },
    ],
    skills: [
      {
        skill: "",
        proficiency: "",
      },
    ],
    languages: [
      {
        language: "",
        proficiency: "",
      },
    ],
  });

  const changeSection = (direction: "next" | "prev") => {
    setSectionIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex + 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleSectionSelect = (section: string) => {
    const index = sections.findIndex((s) => s.id === section);
    if (index !== -1) {
      setSectionIndex(index);
    }
  };

  const CurrentSection = sections[sectionIndex].component;

  return (
    <div className="font-urbanist w-full h-full max-w-7xl justify-center mx-auto flex flex-row px-6">
      <Sidebar
        className="hidden lg:flex"
        sectionIndex={sectionIndex}
        onSelect={handleSectionSelect}
      />
      <main className="flex w-full flex-col sm:items-start border-x border-x-foreground/10 lg:border-x-0">
        <div className="h-[calc(100vh-124px)] overflow-y-auto w-full [scrollbar-gutter:stable]">
          <CurrentSection
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
        </div>
        <div className="h-fit flex justify-between items-center py-4 text-sm border-t border-t-foreground/10 w-full px-6">
          <Button
            onClick={() => changeSection("prev")}
            disabled={sectionIndex === 0}
          >
            <ChevronLeft />
            Prev
          </Button>
          <Button
            onClick={() => changeSection("next")}
            disabled={sectionIndex === sections.length - 1}
          >
            Next
            <ChevronRight />
          </Button>
        </div>
      </main>
      <div className="hidden lg:flex border-l border-l-foreground/10 w-full bg-foreground/10">
        <div className="p-8 text-xs overflow-scroll w-full">
          <h2 className="text-lg font-bold mb-4">Resume Preview</h2>
          {/* Here you can render a preview of the resume based on resumeData */}
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(resumeData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
