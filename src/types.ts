export type Direction = "up" | "left" | "right" | "down";
export type CardContent = {
  title: string;
  description: string;
  skillsUsed: string[];
  imagesUrl: string[];
  createdBy: string[];
  liveServer?: string;
  additionalInfo?: string;
  customPageLink?: string;
};
export type HobbyContent = {
  imagePath: string;
  title: string;
  duration?: number; // years
  details?: string;
};

export type Education = {
  startDate: Date;
  endDate?: Date;
  name: string;
  type: string;
  location: string;
};

export type PageDescription = {
  title: string;
  keyFeatures: string[];
  imageURLs: string[];
  description: string[];
  whatILearned: string;
  links: ProjectLinks;
  skillsUsed: string[];
  APIsUsed?: string[];
  pageDescriptions: PageDescriptions[];
};
export type PageDescriptions = {
  imageUrl: string;
  title: string;
  description: string;
};

export type ProjectLinks = {
  gitHubFrontEnd: string;
  gitHubBackEnd: string;
  liveWebsite: string;
  tutorial: string;
};
