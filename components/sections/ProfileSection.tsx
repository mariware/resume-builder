import * as React from "react";
import { cn } from "../../lib/utils";
import { Label } from "../label";
import { Input } from "../input";
import { Textarea } from "../textarea";

function ProfileSection() {
  return (
    <div
      className={cn(
        "lg:w-xl grid grid-cols-8 gap-4 justify-center text-foreground p-8 w-full mx-auto",
      )}
    >
      <p className="col-span-8 font-bold text-lg">Profile Section</p>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="e.g. Yushi Tokuno"
          autoComplete="off"
        />
      </div>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="profession">Profession</Label>
        <Input type="text" id="profession" placeholder="e.g. Web Developer" />
      </div>
      <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          type="number"
          id="phoneNumber"
          placeholder="e.g. 0999 123 4567"
        />
      </div>
      <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="e.g. tokunoyushi@naver.com"
          autoComplete="off"
        />
      </div>
      <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="linkedin">LinkedIn Profile</Label>
        <span className="flex items-center text-sm">
          linked.com/in/
          <Input type="text" id="linkedin" placeholder="e.g. tokunoyushi" />
        </span>
      </div>
      <div className="col-span-8 md:col-span-4 grid w-full items-center gap-2">
        <Label htmlFor="portfolio">Portfolio Profile</Label>
        <Input type="text" id="portfolio" placeholder="e.g. wish.site" />
      </div>
      <div className="col-span-8 grid w-full items-center gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Describe yourself..." />
      </div>
    </div>
  );
}

export { ProfileSection };
