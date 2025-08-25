import type { Education, HobbyContent } from "@/types";

export const MY_HOBBIES: HobbyContent[] = [
  { imagePath: "/hobbies/volleyball.png", title: "volleyball", duration: 1 },
  { imagePath: "/hobbies/dumbell.png", title: "gym", duration: 2 },
  {
    imagePath: "/hobbies/pawn.png",
    title: "chess",
    details: "It was very popular when I was a child and I played since then.",
  },
  {
    imagePath: "/hobbies/book.png",
    title: "reading",
    duration: 2,
    details:
      "I decided to read at least once every 2 days to make a habit out of it.",
  },
];

export const MY_EDUCATION: Education[] = [
  {
    name: "KdG University",
    type: "Bachelors of Applied CS",
    startDate: new Date("2024-09-16"),
    location: "Chisinau, Moldova",
  },
  {
    name: "StepIt",
    type: "Software Development Course",
    startDate: new Date("2020-11-02"),
    endDate: new Date("2022-12-11"),
    location: "Chisinau, Moldova",
  },
  {
    name: "Orizont",
    type: "High School",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2024-05-31"),
    location: "Chisinau, Moldova",
  },
];
