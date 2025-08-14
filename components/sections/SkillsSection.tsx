import * as React from "react";
import { cn } from "../../lib/utils";
import { Label } from "../label";
import { Input } from "../input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../select";
import { Skill, Language, ResumeData } from "@/models/types";
import { Button } from "../button";

function SkillsSection({
  resumeData,
  setResumeData,
}: {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}) {
  const addSkill = () => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: [
        ...prevData.skills,
        {
          skill: "",
          proficiency: "",
        },
      ],
    }));
  };

  const addLanguage = () => {
    setResumeData((prevData) => ({
      ...prevData,
      languages: [
        ...prevData.languages,
        {
          language: "",
          proficiency: "",
        },
      ],
    }));
  };

  const handleSkillChange = (
    index: number,
    field: keyof Skill,
    value: string,
  ) => {
    setResumeData((prev) => {
      const updatedSkills = [...prev.skills];
      updatedSkills[index] = {
        ...updatedSkills[index],
        [field]: value,
      };
      return { ...prev, skills: updatedSkills };
    });
  };

  const handleLanguageChange = (
    index: number,
    field: keyof Language,
    value: string,
  ) => {
    setResumeData((prev) => {
      const updatedLanguages = [...prev.languages];
      updatedLanguages[index] = {
        ...updatedLanguages[index],
        [field]: value,
      };
      return { ...prev, languages: updatedLanguages };
    });
  };

  const removeSkill = () => {
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.slice(0, -1),
    }));
  };

  const removeLanguage = () => {
    setResumeData((prevData) => ({
      ...prevData,
      languages: prevData.languages.slice(0, -1),
    }));
  };

  return (
    <div
      className={cn(
        "lg:w-lg grid grid-cols-8 gap-4 justify-center text-foreground p-8 w-full mx-auto",
      )}
    >
      <p className="col-span-8 font-bold text-lg">Skills Section</p>
      {resumeData.skills.map((skill, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <div className="col-span-8 border-t border-t-foreground/10 h-0 md:hidden" />
          )}
          <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
            <Label htmlFor="skill">Skill</Label>
            <Input
              type="text"
              id="skill"
              placeholder="e.g. React"
              onChange={(e) =>
                handleSkillChange(index, "skill", e.target.value)
              }
              value={resumeData.skills[index].skill}
            />
          </div>
          <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
            <Label htmlFor="skillProficiency">Skill Proficiency</Label>
            <Select
              onValueChange={(e) => handleSkillChange(index, "proficiency", e)}
              value={resumeData.skills[index].proficiency}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select proficiency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Skill Proficiency</SelectLabel>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                  <SelectItem value="Expert">Expert</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </React.Fragment>
      ))}
      <div className="col-span-8 flex justify-between items-center text-sm">
        <Button onClick={() => addSkill()}> Add </Button>
        {resumeData.skills.length > 1 && (
          <Button onClick={() => removeSkill()} variant="outline">
            Remove
          </Button>
        )}
      </div>
      <div className="col-span-8 border-t border-t-sky-500 h-0" />
      {resumeData.languages.map((lang, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <div className="col-span-8 border-t border-t-foreground/10 h-0 md:hidden" />
          )}
          <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
            <Label htmlFor="language">Language</Label>
            <Input
              type="text"
              id="language"
              placeholder="e.g. Japanese"
              onChange={(e) =>
                handleLanguageChange(index, "language", e.target.value)
              }
              value={resumeData.languages[index].language}
            />
          </div>
          <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
            <Label htmlFor="languageProficiency">Language Proficiency</Label>
            <Select
              onValueChange={(e) =>
                handleLanguageChange(index, "proficiency", e)
              }
              value={resumeData.languages[index].proficiency}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select proficiency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Language Proficiency</SelectLabel>
                  <SelectItem value="Basic">Basic</SelectItem>
                  <SelectItem value="Limited Working">
                    Limited Working
                  </SelectItem>
                  <SelectItem value="Professional Working">
                    Professional Working
                  </SelectItem>
                  <SelectItem value="Full Professional">
                    Full Professional
                  </SelectItem>
                  <SelectItem value="Primary Fluency">
                    Primary Fluency
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </React.Fragment>
      ))}
      <div className="col-span-8 flex justify-between items-center text-sm">
        <Button onClick={() => addLanguage()}> Add </Button>
        {resumeData.languages.length > 1 && (
          <Button onClick={() => removeLanguage()} variant="outline">
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}

export { SkillsSection };
