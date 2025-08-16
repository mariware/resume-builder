import { ResumeData } from "./types";

export const emptyResume: ResumeData = {
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
};

export const exampleResume: ResumeData = {
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
    { skill: "Skill One", proficiency: "Expert" },
    { skill: "Skill Two", proficiency: "Intermediate" },
    { skill: "Skill Three", proficiency: "Beginner" },
  ],
  languages: [{ language: "English", proficiency: "Primary Fluency" }],
};
