import type { CardContent } from "@/types";

export const MY_WORKS: CardContent[] = [
  {
    title: "Clucky",
    description:
      "A MERN stack food ordering app, This project lets users authenticate via Auth0, create and manage their own restaurants, upload images, handle orders live, and process payments with Stripe.",
    createdBy: [],
    skillsUsed: ["React", "MongoDB", "TypeScript", "Tailwind"],
    imagesUrl: [
      "myWorks/clucky1.png",
      "myWorks/clucky2.png",
      "myWorks/clucky3.png",
    ],
    liveServer: "https://clucky-frontend.onrender.com/",
    additionalInfo: "Cities in the Database: Antwerp, Rome, Lyon, Milan, Paris",
    customPageLink: "/Clucky-Project",
  },
  {
    title: "CastleWalls",
    description:
      "Project for the first semester of the first year of the Bachelor's of Computer Science. The project is done in pure java and the storing is done with postresql. In this project I got familiar with the Java language and learned a ton on how to communicate with your teammamtes.",
    createdBy: ["Peter Duga"],
    skillsUsed: ["Java", "PostgreSQL"],
    imagesUrl: [
      "myWorks/castlewall1.png",
      "myWorks/castlewall2.png",
      "myWorks/castlewall3.png",
    ],
  },
  {
    title: "Quarto!",
    description:
      "A project done as an exam for the 2nd Semester of the 1st Year of the Bachelor of Computer Science. Here the project itself is done with java and javafx. It stores the data in a postgresql database. Additionally to the game Quarto, we did a website which showcases the game, our team that made the game and also leaderboards from the collected game data. ",
    createdBy: ["Maxim Cepoi", "Boyan Georgiev", "Joseph Harter-Hartis"],
    skillsUsed: ["Java", "PostgreSQL", "Javascript", "HTML", "CSS"],
    imagesUrl: [
      "myWorks/quarto1.png",
      "myWorks/quarto2.png",
      "myWorks/quarto3.png",
    ],
  },
];
