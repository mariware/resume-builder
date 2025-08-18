import * as React from "react";
import { cn } from "../../lib/utils";
import { Label } from "../label";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { ResumeData } from "@/models/types";
import { SquareUser } from "lucide-react";

function ProfileSection({
  resumeData,
  setResumeData,
}: {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setResumeData((prevData) => ({ ...prevData, imageUrl: url }));
    }
  };

  return (
    <div
      className={cn(
        "lg:w-lg grid grid-cols-8 gap-4 justify-center text-foreground p-8 w-full mx-auto",
      )}
    >
      <div className="col-span-8 flex flex-col gap-2">
        <div className="flex items-center">
          <SquareUser className="stroke-1.5 mr-4 w-5" />
          <p className="font-bold text-lg">Profile Section</p>
        </div>
        <p className="text-muted-foreground text-justify">
          This is your personal header section. Include your name, role, and
          contact details so employers can easily reach you.
        </p>
      </div>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="photo">Profile Picture</Label>
        <Input
          type="file"
          id="photo"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="e.g. John Doe"
          autoComplete="off"
          onChange={(e) =>
            setResumeData((prevData) => ({
              ...prevData,
              profile: { ...prevData.profile, name: e.target.value },
            }))
          }
          value={resumeData.profile.name}
        />
      </div>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="profession">Profession</Label>
        <Input
          type="text"
          id="profession"
          placeholder="e.g. Web Developer"
          onChange={(e) =>
            setResumeData((prevData) => ({
              ...prevData,
              profile: { ...prevData.profile, profession: e.target.value },
            }))
          }
          value={resumeData.profile.profession}
        />
      </div>
      <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          type="number"
          id="phoneNumber"
          placeholder="e.g. 01000000000"
          onChange={(e) =>
            setResumeData((prevData) => ({
              ...prevData,
              profile: { ...prevData.profile, phoneNumber: e.target.value },
            }))
          }
          value={resumeData.profile.phoneNumber}
        />
      </div>
      <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="e.g. johndoe@example.com"
          autoComplete="off"
          onChange={(e) =>
            setResumeData((prevData) => ({
              ...prevData,
              profile: { ...prevData.profile, email: e.target.value },
            }))
          }
          value={resumeData.profile.email}
        />
      </div>
      <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="linkedin">LinkedIn Profile</Label>
        <span className="flex items-center text-sm">
          linkedin.com/in/
          <Input
            type="text"
            id="linkedin"
            placeholder="e.g. johndoe"
            onChange={(e) =>
              setResumeData((prevData) => ({
                ...prevData,
                profile: { ...prevData.profile, linkedin: e.target.value },
              }))
            }
            value={resumeData.profile.linkedin}
          />
        </span>
      </div>
      <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="portfolio">Portfolio Profile</Label>
        <Input
          type="text"
          id="portfolio"
          placeholder="e.g. johndoe.dev"
          onChange={(e) =>
            setResumeData((prevData) => ({
              ...prevData,
              profile: { ...prevData.profile, portfolio: e.target.value },
            }))
          }
          value={resumeData.profile.portfolio}
        />
      </div>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="description">Professional Summary</Label>
        <Textarea
          id="description"
          placeholder="Describe yourself..."
          onChange={(e) =>
            setResumeData((prevData) => ({
              ...prevData,
              profile: { ...prevData.profile, description: e.target.value },
            }))
          }
          value={resumeData.profile.description}
        />
      </div>
    </div>
  );
}

export { ProfileSection };
