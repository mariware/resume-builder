import * as React from "react";
import { cn } from "../../lib/utils";
import { Label } from "../label";
import { Input } from "../input";
import { Education, ResumeData } from "@/models/types";
import { Button } from "../button";

function EducationSection({
  resumeData,
  setResumeData,
}: {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}) {
  const addEducation = () => {
    setResumeData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        {
          school: "",
          schoolLocation: "",
          degree: "",
          schoolStartDate: "",
          schoolEndDate: "",
        },
      ],
    }));
  };

  const handleChange = (
    index: number,
    field: keyof Education,
    value: string,
  ) => {
    setResumeData((prev) => {
      const updatedEducation = [...prev.education];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [field]: value,
      };
      return { ...prev, education: updatedEducation };
    });
  };

  const removeEducation = () => {
    setResumeData((prevData) => ({
      ...prevData,
      education: prevData.education.slice(0, -1),
    }));
  };

  return (
    <div
      className={cn(
        "lg:w-lg grid grid-cols-8 gap-4 justify-center text-foreground p-8 w-full mx-auto",
      )}
    >
      <p className="col-span-8 font-bold text-lg">Education Section</p>
      {resumeData.education.map((edu, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <div className="col-span-8 border-t border-t-sky-500 h-0" />
          )}
          <div className="col-span-8 grid w-full items-center gap-2">
            <Label htmlFor="school">School</Label>
            <Input
              type="text"
              id="school"
              placeholder="e.g. NCT University"
              onChange={(e) => handleChange(index, "school", e.target.value)}
              value={resumeData.education[index].school}
            />
          </div>
          <div className="col-span-8 grid w-full items-center gap-2">
            <Label htmlFor="schoolLocation">School Location</Label>
            <Input
              type="text"
              id="schoolLocation"
              placeholder="e.g. NCT Zone, Kwangya"
              onChange={(e) =>
                handleChange(index, "schoolLocation", e.target.value)
              }
              value={resumeData.education[index].schoolLocation}
            />
          </div>
          <div className="col-span-8 grid w-full items-center gap-2">
            <Label htmlFor="degree">Degree</Label>
            <Input
              type="text"
              id="degree"
              placeholder="e.g. BS Computer Science"
              onChange={(e) => handleChange(index, "degree", e.target.value)}
              value={resumeData.education[index].degree}
            />
          </div>
          <div className="col-span-4 grid w-full items-center gap-2">
            <Label htmlFor="schoolStartDate">Start Date</Label>
            <Input
              type="text"
              id="schoolStartDate"
              placeholder="e.g. Jan 2020"
              onChange={(e) =>
                handleChange(index, "schoolStartDate", e.target.value)
              }
              value={resumeData.education[index].schoolStartDate}
            />
          </div>
          <div className="col-span-4 grid w-full items-center gap-2">
            <Label htmlFor="schoolEndDate">End Date</Label>
            <Input
              type="text"
              id="schoolEndDate"
              placeholder="e.g. Dec 2024"
              onChange={(e) =>
                handleChange(index, "schoolEndDate", e.target.value)
              }
              value={resumeData.education[index].schoolEndDate}
            />
          </div>
        </React.Fragment>
      ))}
      <div className="col-span-8 flex justify-between items-center text-sm">
        <Button onClick={() => addEducation()}> Add </Button>
        {resumeData.education.length > 1 && (
          <Button onClick={() => removeEducation()} variant="outline">
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}

export { EducationSection };
