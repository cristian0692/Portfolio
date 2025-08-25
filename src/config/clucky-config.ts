import type { PageDescription } from "@/types";

export const CLUCKY: PageDescription = {
  title: "Clucky",
  imageURLs: [
    "myWorks/clucky1.png",
    "myWorks/clucky2.png",
    "myWorks/clucky3.png",
  ],
  keyFeatures: [
    "User Authentication (Auth0)/Registration/Profile",
    "Search/Sort/Filter/Pagination of the restaurants",
    "Manage Restaurant and Image Upload (Cloudinary)",
    "Shopping Cart and Stripe Payment",
    "Real-Time Order Tracking",
    "Responsive & Mobile-Friendly",
  ],
  description: [
    "A simulation of a food ordering app build with MERN stack. It also utilizes Stripe for simulating the payment process (you can use a stripe filler card to test) and Auth0 for secure Authentication. The login info is safely stored on their db. The information about the restaurants and orders is stored in the Mongodb database. ",
  ],
  whatILearned:
    "I learned a lot about how React uses Hooks and effects to manage data, as well as how to create custom hooks to safely retrieve information from a database. The tutorial also gave me insight into how a MERN stack infrastructure is structured and how to implement APIs within it. Overall, it was extremely helpful and provided me with production-grade knowledge.",
  skillsUsed: ["React", "MongoDB", "TypeScript", "Tailwind"],
  APIsUsed: ["Auth0", "Express", "NodeJS", "Stripe"],
  pageDescriptions: [
    {
      imageUrl: "",
      title: "",
      description: "",
    },
  ],
  links: {
    liveWebsite: "https://clucky-frontend.onrender.com/",
    gitHubFrontEnd: "https://github.com/cristian0692/Clucky-Frontend",
    gitHubBackEnd: "https://github.com/cristian0692/Clucky-Backend",
    tutorial: "https://www.youtube.com/watch?v=ardeKHEN1j4",
  },
};
