export type Profile = {
  name: string;
  profession: string;
  phoneNumber: string;
  email: string;
  linkedin: string;
  portfolio: string;
  description: string;
};

export type Education = {
  school: string;
  schoolLocation: string;
  degree: string;
  schoolStartDate: string;
  schoolEndDate: string;
};

export type Work = {
  company: string;
  workLocation: string;
  position: string;
  workStartDate: string;
  workEndDate: string;
  workDescription: string;
};

export type Skill = {
  skill: string;
  proficiency: string;
};

export type Language = {
  language: string;
  proficiency: string;
};

export type ResumeData = {
  profile: Profile;
  education: Education[];
  work: Work[];
  skills: Skill[];
  languages: Language[];
};
