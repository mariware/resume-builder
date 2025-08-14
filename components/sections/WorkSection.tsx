import * as React from "react";
import { cn } from "../../lib/utils";
import { Label } from "../label";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { Work, ResumeData } from "@/models/types";
import { Button } from "../button";

function WorkSection({
  resumeData,
  setResumeData,
}: {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}) {
  const addWork = () => {
    setResumeData((prevData) => ({
      ...prevData,
      work: [
        ...prevData.work,
        {
          company: "",
          workLocation: "",
          position: "",
          workStartDate: "",
          workEndDate: "",
          workDescription: "",
        },
      ],
    }));
  };

  const handleChange = (index: number, field: keyof Work, value: string) => {
    setResumeData((prev) => {
      const updatedWork = [...prev.work];
      updatedWork[index] = {
        ...updatedWork[index],
        [field]: value,
      };
      return { ...prev, work: updatedWork };
    });
  };

  const removeWork = () => {
    setResumeData((prevData) => ({
      ...prevData,
      work: prevData.work.slice(0, -1),
    }));
  };

  return (
    <div
      className={cn(
        "lg:w-lg grid grid-cols-8 gap-4 justify-center text-foreground p-8 w-full mx-auto",
      )}
    >
      <p className="col-span-8 font-bold text-lg">Work Section</p>
      {resumeData.work.map((work, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <div className="col-span-8 border-t border-t-sky-500 h-0" />
          )}
          <div className="col-span-8 grid w-full items-center gap-2">
            <Label htmlFor="company">Company</Label>
            <Input
              type="text"
              id="company"
              placeholder="e.g. SM Entertainment"
              onChange={(e) => handleChange(index, "company", e.target.value)}
              value={resumeData.work[index].company}
            />
          </div>
          <div className="col-span-8 grid w-full items-center gap-2">
            <Label htmlFor="workLocation">Work Location</Label>
            <Input
              type="text"
              id="workLocation"
              placeholder="e.g. Kwangya"
              onChange={(e) =>
                handleChange(index, "workLocation", e.target.value)
              }
              value={resumeData.work[index].workLocation}
            />
          </div>
          <div className="col-span-8 grid w-full items-center gap-2">
            <Label htmlFor="position">Position</Label>
            <Input
              type="text"
              id="position"
              placeholder="e.g. Web Developer"
              onChange={(e) => handleChange(index, "position", e.target.value)}
              value={resumeData.work[index].position}
            />
          </div>
          <div className="col-span-4 grid w-full items-center gap-2">
            <Label htmlFor="workStartDate">Start Date</Label>
            <Input
              type="text"
              id="workStartDate"
              placeholder="e.g. Jan 2025"
              onChange={(e) =>
                handleChange(index, "workStartDate", e.target.value)
              }
              value={resumeData.work[index].workStartDate}
            />
          </div>
          <div className="col-span-4 grid w-full items-center gap-2">
            <Label htmlFor="workEndDate">End Date</Label>
            <Input
              type="text"
              id="workEndDate"
              placeholder="e.g. Jun 2025"
              onChange={(e) =>
                handleChange(index, "workEndDate", e.target.value)
              }
              value={resumeData.work[index].workEndDate}
            />
          </div>
          <div className="col-span-8 grid w-full items-center gap-2">
            <Label htmlFor="workDescription">Work Description</Label>
            <Textarea
              id="workDescription"
              placeholder="Describe your responsibilities..."
              onChange={(e) =>
                handleChange(index, "workDescription", e.target.value)
              }
              value={resumeData.work[index].workDescription}
            />
          </div>
        </React.Fragment>
      ))}
      <div className="col-span-8 flex justify-between items-center text-sm">
        <Button onClick={() => addWork()}> Add </Button>
        {resumeData.work.length > 1 && (
          <Button onClick={() => removeWork()} variant="outline">
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}

export { WorkSection };
