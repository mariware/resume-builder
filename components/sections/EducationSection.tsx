import * as React from "react";
import { cn } from "../../lib/utils";
import { Label } from "../label";
import { Input } from "../input";

function EducationSection() {
  return (
    <div
      className={cn(
        "lg:w-xl grid grid-cols-8 gap-4 justify-center text-foreground p-8 w-full mx-auto",
      )}
    >
      <p className="col-span-8 font-bold text-lg">Education Section</p>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="school">School</Label>
        <Input type="text" id="school" placeholder="e.g. NCT University" />
      </div>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="schoolLocation">School Location</Label>
        <Input
          type="text"
          id="schoolLocation"
          placeholder="e.g. NCT Zone, Kwangya"
        />
      </div>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="degree">Degree</Label>
        <Input type="text" id="degree" placeholder="e.g. BS Computer Science" />
      </div>
      <div className="col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="schoolStartDate">Start Date</Label>
        <Input type="text" id="schoolStartDate" placeholder="e.g. Jan 2020" />
      </div>
      <div className="col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="workEndDate">End Date</Label>
        <Input type="text" id="workEndDate" placeholder="e.g. Dec 2024" />
      </div>
    </div>
  );
}

export { EducationSection };
