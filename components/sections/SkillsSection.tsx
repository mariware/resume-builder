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
import { CircleQuestionMark, PencilRuler } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

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
      <div className="col-span-8 flex flex-col gap-2">
        <div className="flex items-center">
          <PencilRuler className="stroke-1.5 mr-4 w-5" />
          <p className="font-bold text-lg">Skills Section</p>
        </div>
        <p className="text-muted-foreground text-justify">
          These are your key strengths. Highlight the most relevant skills to
          the job using short keywords rather than sentences. Include skills and
          languages you know with their corresponding proficiency.
        </p>
      </div>
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
            {index === 0 ? (
              <div className="flex justify-between">
                <Label htmlFor="skillProficiency">Skill Proficiency</Label>
                <Tooltip>
                  <TooltipTrigger>
                    <CircleQuestionMark className="text-muted-foreground w-4" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-48 sm:max-w-none">
                    <p>
                      Skill levels show how well you can perform a task and the
                      depth of your expertise.
                    </p>
                    <ol>
                      <li>
                        <span className="font-bold">Beginner</span>: Just
                        starting; requires supervision.
                      </li>
                      <li>
                        <span className="font-bold">Intermediate</span>: Knows
                        basics; performs with some guidance.
                      </li>
                      <li>
                        <span className="font-bold">Advanced</span>: Strong
                        grasp; works independently.
                      </li>
                      <li>
                        <span className="font-bold">Expert</span>: Full mastery;
                        able to teach or guide others.
                      </li>
                    </ol>
                  </TooltipContent>
                </Tooltip>
              </div>
            ) : (
              <Label htmlFor="skillProficiency">Skill Proficiency</Label>
            )}
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
        <Button onClick={() => addSkill()}> Add Skill </Button>
        {resumeData.skills.length > 0 && (
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
              placeholder="e.g. English"
              onChange={(e) =>
                handleLanguageChange(index, "language", e.target.value)
              }
              value={resumeData.languages[index].language}
            />
          </div>
          <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
            {index === 0 ? (
              <div className="flex justify-between">
                <Label htmlFor="languageProficiency">
                  Language Proficiency
                </Label>
                <Tooltip>
                  <TooltipTrigger>
                    <CircleQuestionMark className="text-muted-foreground w-4" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-52 sm:max-w-none">
                    <p>
                      Language fluency levels show how well you can read, write,
                      and speak a language.
                    </p>
                    <ol>
                      <li>
                        <span className="font-bold">Basic</span>: Can form
                        simple sentences and basic phrases.
                      </li>
                      <li>
                        <span className="font-bold">Limited Working</span>:
                        Handles everyday conversations and basic instructions.
                      </li>
                      <li>
                        <span className="font-bold">Professional Working</span>:
                        Effective in most workplace situations; may need help
                        with complex terms.
                      </li>
                      <li>
                        <span className="font-bold">Full Professional</span>:
                        Advanced workplace fluency with near-native command.
                      </li>
                      <li>
                        <span className="font-bold">Primary Fluency</span>:
                        Complete fluency with little to no accent.
                      </li>
                    </ol>
                  </TooltipContent>
                </Tooltip>
              </div>
            ) : (
              <Label htmlFor="languageProficiency">Language Proficiency</Label>
            )}
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
        <Button onClick={() => addLanguage()}> Add Language </Button>
        {resumeData.languages.length > 0 && (
          <Button onClick={() => removeLanguage()} variant="outline">
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}

export { SkillsSection };
