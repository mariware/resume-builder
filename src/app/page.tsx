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
import { Resume } from "../../components/resumeViewer/resumeViewer";
import { Header } from "../../components/header";

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
    education: [],
    work: [],
    skills: [],
    languages: [],
  });

  const prefillData = () => {
    setResumeData(() => ({
      profile: {
        name: "Example Name",
        profession: "Example Profession",
        phoneNumber: "01000000000",
        email: "example@example.com",
        linkedin: "example-linkedin",
        portfolio: "example.com/portfolio",
        description:
          "This is an example description used to demonstrate how the profile section will look. Replace this text with real data.",
      },
      education: [
        {
          school: "Example School Name",
          schoolLocation: "Example City, Country",
          degree: "Example Degree or Program",
          schoolStartDate: "Jan 2000",
          schoolEndDate: "Dec 2004",
        },
        {
          school: "Another Example School",
          schoolLocation: "Another Example City, Country",
          degree: "Example Training Program",
          schoolStartDate: "Jan 2005",
          schoolEndDate: "Dec 2009",
        },
      ],
      work: [
        {
          company: "Example Company",
          workLocation: "Example City, Country",
          position: "Example Job Title",
          workStartDate: "2010",
          workEndDate: "2015",
          workDescription:
            "- Example bullet point one\n- Example bullet point two\n- Example bullet point three",
        },
        {
          company: "Another Example Company",
          workLocation: "Another Example City, Country",
          position: "Example Position",
          workStartDate: "2016",
          workEndDate: "Present",
          workDescription:
            "- Example bullet point four\n- Example bullet point five",
        },
      ],
      skills: [
        {
          skill: "Skill One",
          proficiency: "Expert",
        },
        {
          skill: "Skill Two",
          proficiency: "Intermediate",
        },
        {
          skill: "Skill Three",
          proficiency: "Beginner",
        },
      ],
      languages: [
        {
          language: "English",
          proficiency: "Primary Fluency",
        },
      ],
    }));
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

  return (
    <>
      <Header prefillData={prefillData} />
      <div className="font-urbanist w-full h-full max-w-7xl justify-center mx-auto flex flex-row px-6">
        <Sidebar
          className="hidden lg:flex"
          sectionIndex={sectionIndex}
          onSelect={handleSectionSelect}
        />
        <main className="flex w-full flex-col sm:items-start border-x border-x-foreground/10 lg:border-x-0">
          <div className="h-[calc(100vh-136px)] overflow-y-auto w-full [scrollbar-gutter:stable]">
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
