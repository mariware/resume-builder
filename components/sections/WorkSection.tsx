import * as React from "react";
import { cn } from "../../lib/utils";
import { Label } from "../label";
import { Input } from "../input";
import { Textarea } from "../textarea";

function WorkSection() {
  return (
    <div
      className={cn(
        "lg:w-xl grid grid-cols-8 gap-4 justify-center text-foreground p-8 w-full mx-auto",
      )}
    >
      <p className="col-span-8 font-bold text-lg">Work Section</p>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="company">Company</Label>
        <Input type="text" id="company" placeholder="e.g. SM Entertainment" />
      </div>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="workLocation">Work Location</Label>
        <Input type="text" id="workLocation" placeholder="e.g. Kwangya" />
      </div>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="position">Position</Label>
        <Input type="text" id="position" placeholder="e.g. Web Developer" />
      </div>
      <div className="col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="workStartDate">Start Date</Label>
        <Input type="text" id="workStartDate" placeholder="e.g. Jan 2025" />
      </div>
      <div className="col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="workEndDate">End Date</Label>
        <Input type="text" id="workEndDate" placeholder="e.g. Jun 2025" />
      </div>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="workDescription">Work Description</Label>
        <Textarea
          id="workDescription"
          placeholder="Describe your responsibilities..."
        />
      </div>
    </div>
  );
}

export { WorkSection };
