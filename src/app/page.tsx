"use client";

import { useState } from "react";
import { Button } from "../../components/button";
import { Sidebar } from "../../components/sidebar";
import { ProfileSection } from "../../components/sections/ProfileSection";
import { EducationSection } from "../../components/sections/EducationSection";
import { WorkSection } from "../../components/sections/WorkSection";
import { SkillsSection } from "../../components/sections/SkillsSection";
import { ChevronLeft, ChevronRight, Eye, Pencil } from "lucide-react";
import { ResumeData } from "@/models/types";
import { Resume } from "../../components/resumeViewer/resumeViewer";
import { Header } from "../../components/header";
import { emptyResume, exampleResume } from "@/models/resumes";

const sections = [
  { id: "profile", component: ProfileSection },
  { id: "education", component: EducationSection },
  { id: "work", component: WorkSection },
  { id: "skills", component: SkillsSection },
];

export default function Home() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [preview, setPreview] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData>(emptyResume);

  const prefillData = () => {
    setResumeData(() => exampleResume);
  };

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
  const toggleButton = preview ? (
    <>
      <Pencil /> <span>Edit</span>
    </>
  ) : (
    <>
      <Eye /> <span>Preview</span>
    </>
  );

  return (
    <>
      <Header prefillData={prefillData} />
      <div className="font-urbanist w-full max-w-7xl justify-center mx-auto flex flex-row px-6">
        <Sidebar
          className="hidden lg:flex"
          sectionIndex={sectionIndex}
          onSelect={handleSectionSelect}
        />
        <main className="flex w-full flex-col sm:items-start border-x border-x-foreground/10 lg:border-x-0">
          <div className="hidden lg:block h-[calc(100dvh-136px)] overflow-y-auto w-full [scrollbar-gutter:stable]">
            <CurrentSection
              resumeData={resumeData}
              setResumeData={setResumeData}
            />
          </div>
          {preview ? (
            <div className="lg:hidden p-8 pr-4 text-xs w-full h-[calc(100dvh-136px)]">
              <h2 className="text-lg font-bold mb-4">Resume Preview</h2>
              <Resume resumeData={resumeData} />
            </div>
          ) : (
            <div className="lg:hidden h-[calc(100dvh-136px)] overflow-y-auto w-full [scrollbar-gutter:stable]">
              <CurrentSection
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            </div>
          )}
          <div className="h-fit flex justify-between items-center py-4 text-sm border-t border-t-foreground/10 w-full px-6">
            <Button
              onClick={() => changeSection("prev")}
              disabled={sectionIndex === 0}
              className={`${preview ? "hidden" : "flex"} lg:flex items-center`}
            >
              <ChevronLeft />
              <span className="hidden md:flex">Prev</span>
            </Button>
            <Button
              onClick={() => setPreview(!preview)}
              className="lg:hidden mx-auto"
            >
              {toggleButton}
            </Button>
            <Button
              onClick={() => changeSection("next")}
              disabled={sectionIndex === sections.length - 1}
              className={`${preview ? "hidden" : "flex"} lg:flex items-center`}
            >
              <span className="hidden md:block">Next</span>
              <ChevronRight />
            </Button>
          </div>
        </main>
        <div className="hidden lg:flex border-l border-l-foreground/10 w-full">
          <div className="p-8 pr-4 text-xs w-full h-full">
            <h2 className="text-lg font-bold mb-4">Resume Preview</h2>
            <Resume resumeData={resumeData} />
          </div>
        </div>
      </div>
    </>
  );
}
