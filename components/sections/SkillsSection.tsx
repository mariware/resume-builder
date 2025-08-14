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

function SkillsSection() {
  return (
    <div
      className={cn(
        "lg:w-xl grid grid-cols-8 gap-4 justify-center text-foreground p-8 w-full mx-auto",
      )}
    >
      <p className="col-span-8 font-bold text-lg">Skills Section</p>
      <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="skill">Skill</Label>
        <Input type="text" id="skill" placeholder="e.g. React" />
      </div>
      <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="skillProficiency">Skill Proficiency</Label>
        <Select>
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
      <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="language">Language</Label>
        <Input type="text" id="language" placeholder="e.g. Japanese" />
      </div>
      <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="languageProficiency">Language Proficiency</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select proficiency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Language Proficiency</SelectLabel>
              <SelectItem value="Beginner">Basic</SelectItem>
              <SelectItem value="Limited Working">Limited Working</SelectItem>
              <SelectItem value="Professional Working">
                Professional Working
              </SelectItem>
              <SelectItem value="Full Professional">
                Full Professional
              </SelectItem>
              <SelectItem value="Primary Fluency">Primary Fluency</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export { SkillsSection };
